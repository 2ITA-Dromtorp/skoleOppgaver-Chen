import './App.css'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Log from './images/profile-image.jpg'
import Json from './profiles.js'


export default function StudentID (){

    const { profile } = useParams()
    const Navigate = useNavigate()
    const matchingProfile = Json.elever.find((student) => student.navn === profile);
    const [profileMatch, setProfileMatch] = useState({
    });

useEffect(()=>{    
    Json.elever.map((item) =>   {
        if (profile === item.navn){
            console.log(item)
            setProfileMatch(item)
        }
    });})


    // console.log(Json.elever[0].navn)
    // console.log(matchingProfile)
 

return(
    <>
<div className='profilboks'>
    <div className="profilecard"> 
   <nav className='navbar'>
        {/* <button className='home' onClick={()=> {Navigate("/")}}>home</button> */}
        <button className='home' onClick={()=> {Navigate(-1)}}>return</button>
    </nav>
    {matchingProfile ? (<>
        <h1>{profile}</h1>
        <img src={Log} height={70} width={70}></img>
            <p>navn : {profileMatch.navn}</p>
            <p>Klasse : {profileMatch.klasse}</p>
            <p>Email : {profileMatch.email}</p>
            <p>Telefon nummer : {profileMatch.tlf}</p>
    </>) : (<p>no Matching profile for {profile} mlem 🐈</p>)}
    </div>

</div>
    </>
)
}