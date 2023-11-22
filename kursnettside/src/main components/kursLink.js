import '../App.css'
import { Link } from 'react-router-dom';

export default function student(props){
    let name = props.name;


    return(

        <div><Link to={name}> {name}</Link></div>

    )
}