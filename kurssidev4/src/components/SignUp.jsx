import '../App.css'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Confirm from './popUpConfirmation.jsx'




export default function () {
    const navigate = useNavigate();
    const { Kursnavn } = useParams();

    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');
    const[email, setEmail] = useState('');
    const[phone, setPhone] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();

    const dataToSend = {
        username: username,
        phone: phone,
        email: email,
        password: password
    }
        fetch('/api/create-user', {
            method:'POST',
            headers:{
              "content-type":"application/json",
            },
            body:JSON.stringify(dataToSend),
        })
        .then(async (res) => {
                        const data = await res.json();
                        if (res.status===200) {
                            console.log(data);
 
                        }  if (res.status===400) {
                            console.alert("Du må fylle ut alle feltene")
                        }
                    })
                    .catch((error) => {
                        console.error('Error fetching data:', error);
                    });   

                 }

    return(
        <div className='mainBox'>
            <div className='blueBox'>
                <div className='headBox'>
                    <h1>Lag en bruker</h1>
                </div>
                <div className='middleBox'>
                <h4>Man må Lage en bruker får du kan få meldt deg på.</h4>
                <h4>fyll ut feltene unner for å opprette en bruker.</h4>
                </div>
                <div className='loginInfo'>
                    <form onSubmit={(e)=>handleSubmit(e)}>
                        <label for="fname">Skriv inn bruker navn:</label>
                        <input type='string' value={username} onInput={(e) => setUsername(e.target.value)}></input><br></br>
                        <label for="fname"> Skriv inn Telefon nummer:</label>
                        <input type='number' value={phone} onInput={(e) => setPhone(e.target.value)}></input><br></br>
                        <label for="fname">Skriv inn Email:</label>
                        <input type='email' value={email} onInput={(e) => setEmail(e.target.value)}></input><br></br>
                        <label for="fname">Lag et Passord:</label>
                        <input type='password' value={password} onInput={(e) => setPassword(e.target.value)}></input><br></br>
                        <Popup trigger={<input type='submit' value={"Opprett bruker"}></input>} position={"center center"} modal className='popup'>
                            <Confirm/>
                        </Popup>
                        <label>har en bruker?</label>
                        {useNavigate(-1) ===  Kursnavn  ? (
                            <Link to={'/'+Kursnavn+'/login'}>klikk for å logge inn</Link>
                            ) : (
                            <Link to={'/login'}>klikk for å logge inn</Link>
                        )}
                        {/* <input type='submit' value={"Opprett bruker"}></input> */}
                    </form>
                        

                </div>
            </div>
        </div>
    )
}