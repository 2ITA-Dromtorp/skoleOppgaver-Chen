import '../App.css'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Json from './kurs.js'

export default function Kursinfo () {
    const { kursNavn } = useParams()
    // const Navigate = useNavigate()
    const matchingKurs = Json.kursInfo.find((kurs) => kurs.kursNavn === kursNavn);
    const [profileMatch, setProfileMatch] = useState({
    });

    useEffect(()=>{    
        Json.kursInfo.map((item) =>   {
            if (kursNavn === item.kursNavn){
                console.log(item)
                setProfileMatch(item)
            }
        });})

    return(
        <div className='mainBox'>
            {matchingKurs ? (
            <div className='blueBox'>
                <h1>{kursNavn}</h1>
                <p>{profileMatch.description}</p>
            </div>) : (<p>mlem no info found go back 🐈</p>)}
        </div>
        
    );
}
