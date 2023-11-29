import '../App.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default function Login() {
    const navigator = useNavigate();
    const { Kursnavn } = useParams();
    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');
    const[email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        
    const dataToCheck = {
        username: username,
        email: email,
        password: password
    }
        fetch('/api/login', {
            method:'POST',
            headers:{
              "content-type":"application/json"
            },
            body:JSON.stringify(dataToCheck),
        })
        .then(async (res) => {
                        const data = await res.json();
                        if (res.status===200) {
                            console.log(data);
                            navigator("/Sign-Inn-success")
 
                        }  if (res.status===400) {
                            console.alert("Du må fylle ut alle feltene")
                        }
                    })
                    .catch((error) => {
                        console.error('Error fetching data:', error);
                    });   

                 }

    return (
        <>
        <div className='mainBox'>
            <div className='blueBox'>
                <div className='headBox'>
                    <h1>Login</h1>
                </div>
                <div className='middleBox'>
                    <h4>Man må logge inn på en bruker for å melde seg på et kurs</h4>
                </div>
                <div className='loginInfo'>
                <form onSubmit={(e)=>handleSubmit(e)}>
                    <label >Username:</label>
                    <input type="text" value={username} onInput={(e) => setUsername(e.target.value)}/>
                    <br></br>
                    <label >Email:</label>
                    <input type="email" value={email} onInput={(e) => setEmail(e.target.value)}/>
                    <br></br>
                    <label >Password:</label>
                    <input type="password" value={password} onInput={(e) => setPassword(e.target.value)}/> 
                    <br></br>                   
                    <input type="submit" value={"Login"} />
                    <br></br>
                    <label>har ikke en bruker?</label>
                    <Link to={'/'+Kursnavn+'/Sign-Up'}>klikk for å registrer deg</Link>
                    </form>
                </div>
            </div>    
        </div>
        </>
    );
}