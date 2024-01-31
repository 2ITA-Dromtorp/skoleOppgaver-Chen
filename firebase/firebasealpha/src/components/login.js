import '../App.css';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../firebase.js';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function Login({accheck}) {
        // const [username, setUsername] = useState('');
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [check, setCheck] = useState(accheck);
        const auth = getAuth();
       
        const handleLogin = async (e) => {
          e.preventDefault();
         console.log(check);
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password)
            console.log('Login successful! Welcome ' + userCredential.user.email);
        } catch (error){
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log( errorCode, errorMessage)
        }    
  };
 

       
        

    return (
        <>
        <div className='mainBox'>
            <div className='blueBox'>
                <div className='headBox'>
                    <h1>Login</h1>
                </div>
                <div className='middleBox'>
                    <h4>Login in to an existing account to proceed</h4>
                </div>
                <div className='loginInfo'>
                <form onSubmit={handleLogin}>
                    {/* <label >Username:</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
                    <br></br> */}
                    <label >Email:</label>
                    <input type="email" value={email} onInput={(e) => setEmail(e.target.value)} />
                    <br></br>
                    <label >Password:</label>
                    <input type="password" value={password} onInput={(e) => setPassword(e.target.value)} autoComplete='password' required/> 
                    <br></br>                   
                    <input type="submit" value={"Login"} />
                    <br></br>
                    <label>dont have an account?</label>
                    <Link to={'/'}>make an account here</Link>
                    </form>
                </div>
            </div>    
        </div>
        </>
    );
}