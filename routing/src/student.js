import './App.css'
import { Link, } from 'react-router-dom';

export default function student(props){
    let name = props.name;
    console.log(name)

    return(

        <div className='person'><Link to={name}> {name}</Link></div>


    )
}