import { useParams } from 'react-router-dom'
import '../App.css'

export default function () {
    const { Kursnavn } = useParams()
    return(
        <div className='popBox'>
           <h1>Du har meldt deg på {Kursnavn}</h1>
        </div>
    )
}