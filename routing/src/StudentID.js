import './App.css'
import { useParams } from 'react-router-dom'


export default function StudentID (){

    

    const { profile } = useParams()

    console.error(profile)
return(
    <>
        <h1>{profile}</h1>
    </>
)

}