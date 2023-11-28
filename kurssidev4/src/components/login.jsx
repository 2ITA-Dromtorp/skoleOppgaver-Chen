import '../App.css'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Confirm from './confirmation.jsx'




export default function () {
    const navigate = useNavigate();

    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');
    const[email, setEmail] = useState('');
    const[phone, setPhone] = useState('');


    const handleSubmit = () => {
        console.log(username, phone, email, password);
 
 
    const dataToSend = {
        username: username,
        phone: phone,
        email: email,
        password: password
    }
        fetch('/create-user', {
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
                            navigate("/")
 
                        }  if (res.status===400) {
                            alert("Du må fylle ut alle feltene")
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
                        <label for="fname">Skriv inn bruker navn:</label>
                        <input type='string' value={username} onInput={(e) => setUsername(e.target.value)}></input><br></br>
                        <label for="fname"> Skriv inn Telefon nummer:</label>
                        <input type='number' value={phone} onInput={(e) => setPhone(e.target.value)}></input><br></br>
                        <label for="fname">Skriv inn Email:</label>
                        <input type='email' value={email} onInput={(e) => setEmail(e.target.value)}></input><br></br>
                        <label for="fname">Lag et Passord:</label>
                        <input type='password' value={password} onInput={(e) => setPassword(e.target.value)}></input><br></br>
                        <Popup trigger={<input type='submit' value={"Opprett bruker"} onClick={handleSubmit}></input>} position={"center center"} style=" z-index: 99999; height: 100%; width: 70%; margin-top: -10%; background-color: crimson; display: flex; align-items: center; justify-content: center;">
                            <Confirm/>
                        </Popup>
                        

                </div>
            </div>
        </div>
    )
}