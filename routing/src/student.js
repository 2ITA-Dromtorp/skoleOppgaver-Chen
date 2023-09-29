import './App.css'
import { Link, } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

export default function student(props){
    let name = props.name;
    const navigate = useNavigate()
    console.log(name)

    function click(){
        navigate(name)
    }
    return(
        <button onClick={click}>
        <div className='person'><Link to={name}> {name}</Link></div>
        </button>
    )
}