import '../App.css'
import React, { useState } from 'react';
import {Link } from 'react-router-dom';




export default function () {

    const [username, setUsername] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = () => {
        console.log(username, number, mail, passord);

        const dataToSend = {
            username: username,
            number: number,
            mail: mail,
            passord: passord
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
                                navigate("/hjem")
     
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
                        <input type='string' value={username}></input><br></br>
                        <label for="fname"> Skriv inn Telefon nummer:</label>
                        <input type='number' value={phone}></input><br></br>
                        <label for="fname">Skriv inn Email:</label>
                        <input type='email' value={email}></input><br></br>
                        <label for="fname">Lag et Passord:</label>
                        <input type='string' value={password}></input><br></br>
                        <input type='submit' value={'Opprett bruker'}></input>

                </div>
            </div>
        </div>
    )
}