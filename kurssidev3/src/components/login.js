import '../App.css'
import React, { useState } from 'react';




export default function () {

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
                        <input type='string'></input><br></br>
                        <label for="fname"> Skriv inn Telefon nummer:</label>
                        <input type='number'></input><br></br>
                        <label for="fname">Skriv inn Email:</label>
                        <input type='email'></input><br></br>
                        <label for="fname">Lag et Passord:</label>
                        <input type='string'></input><br></br>
                        <input type='submit' value={'Opprett bruker'}></input>

                </div>
            </div>
        </div>
    )
}