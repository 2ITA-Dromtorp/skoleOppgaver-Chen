import '../App.css'
import { Link } from 'react-router-dom';
import Profileimg from '../imgs/Profile.png'
import HomeLogo from '../imgs/homeicon.png'


export default function navbar () {
    return(
        <div className='navbar'>
            <Link to={'/'}className='logo'> <img src={HomeLogo} alt="Home" className='profile'/> </Link>   
            <div className='redirect'>
                <div className='navbox'> <p>kontakt oss</p> </div>
                <Link to={'/Login'}className='navbox'><img src={Profileimg} alt="Profile" className='profile'/></Link>
            </div>
        </div>
    )
}