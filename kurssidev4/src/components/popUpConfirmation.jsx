import { useParams } from 'react-router-dom'
import '../App.css'
import { Link } from 'react-router-dom'
import Mark from '../imgs/check-mark.webp'

export default function () {
    const { Kursnavn } = useParams()
    return(
        <div className='popup'>
            <img src={Mark} alt="Green check mark" />
           <h1>Du har meldt deg på {Kursnavn}</h1>
           <Link to={'/'} className='homer'>se flere av våre kurs</Link>
        </div>
    )
}