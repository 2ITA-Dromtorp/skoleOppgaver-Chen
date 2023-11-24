import '../App.css'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
import Json from './kurs.js'

export default function Kursinfo () {
    const { Kursnavn } = useParams()
    const Navigate = useNavigate()
    const matchingKurs = Json.kursInfo.find((kursLink) => kursLink.kursNavn === Kursnavn);
    const [profileMatch, setProfileMatch] = useState({
    });

    useEffect(()=>{    
        Json.kursInfo.map((item) =>   {
            if (Kursnavn === item.kursNavn){
                console.log(item)
                setProfileMatch(item)
            }
        });})

         console.log(matchingKurs)
         console.log(Json)

    return(
        <div className='mainBox'>
            {matchingKurs ? (
                <>
                <div className='tittleBar'>
                    <h1>{Kursnavn}</h1>
                </div>
            <div className='blueBox'>
                <p>{profileMatch.description}</p>
                <table>
                    <tr>
                        <td>Hvem som arrangerer:</td>
                    </tr>
                    <tr>
                        <td>Når kurs skal være:</td>
                    </tr>
                    <tr>
                        <td>Hvor kurs skal være:</td>
                    </tr>
                </table>
                <Link to={'/Login'} className='home'><p>klikk for å meld deg på</p></Link>
            </div></>) : (<div className='blueBox'>
            <p>mlem no info found go back 🐈</p>
            <button className='home' onClick={()=> {Navigate(-1)}}>klikk for å gå til bake</button>
            </div>)}
        </div>
    );
}
