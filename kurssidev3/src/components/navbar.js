import '../App.css'
import { Link } from 'react-router-dom';


export default function navbar () {
    return(
        <div className='navbar'>
            <Link to={'/'}className='logo'> <p>logo</p> </Link>   
            <div className='redirect'>
                <div className='navbox'> <p>kontakt oss</p> </div>
                <div className='navbox'> <p>Profil bilde går her</p> </div>
            </div>
        </div>
    )
}