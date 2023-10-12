import './App.css'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Log from './logo.svg'


export default function StudentID (){

    const { profile } = useParams()
    const Navigate = useNavigate()

    console.error(profile)

return(
    <>
<div className='profilboks'>
     <h1>Current profile:{profile}</h1>

    <nav className='navbar'>
        {/* <button className='home' onClick={()=> {Navigate("/")}}>home</button> */}
        <button className='home' onClick={()=> {Navigate(-1)}}>return</button>
    </nav>

    <div className="profilecard">
        <h1>{profile}</h1>
        <img src={Log} height={70} width={70}></img>
            <p>Klasse: 10330023</p>
            <p>E-mail: example@viken.no</p>
            <p>Tlf.: 10330023</p>
    </div>

</div>
    </>
)
}