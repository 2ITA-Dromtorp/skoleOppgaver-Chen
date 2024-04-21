import '../App.css';
import { useState } from 'react';

export default function Login() {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {    
        event.preventDefault();
        console.log(username, phone, email, password);

        const dataToSend = {
            firstname: firstname,
            lastname: lastname,
            username: username,
            phone: phone,
            email: email,
            password: password
        }

        fetch('http://localhost:3300/api/create-user', {
            method:'POST',
            headers:{
              "content-type":"application/json"
            },
            body:JSON.stringify(dataToSend),
        })
        .then(async (res) => {
            const data = await res.text();
            if (res.status===200) {
                console.log(data);
                alert("Du har logget inn")

            }  if (res.status===400) {
                alert("Du må fylle ut alle feltene")
            }
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });  
    }

    return (
        <div className="ScreenWidth">
            <div className='homepage'>
                <h1>Login</h1>
                <div className='input'>
                <form onSubmit={(e)=>handleSubmit(e)}>
                    <label>First name:</label>
                       <input type="text" value={firstname} onChange={e => setFirstname(e.target.value)} />
                    <label>Last name:</label>
                       <input type="text" value={lastname} onChange={e => setLastname(e.target.value)} />
                   <label>Username:</label>
                       <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
                     <label>Password:</label>
                     <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                  <label>Email:</label>
                     <input type="Email:" value={email} onChange={e => setEmail(e.target.value)} />
                  <label>Phone:</label>
                   <input type="Phone:" value={phone} onChange={e => setPhone(e.target.value)} />
                    <button type="submit">Sign up</button>
                </form>
                </div>
            </div>
        </div>
    )
}




