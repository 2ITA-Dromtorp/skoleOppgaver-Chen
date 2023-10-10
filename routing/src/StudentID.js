import './App.css'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


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



</div>
    </>
)
}