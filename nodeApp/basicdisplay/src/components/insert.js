import '../App.css';
import axios from 'axios';
import { useState } from 'react';

export default function INSERT() {
 const [customersData, setCustomersData] = useState([]);
 const getCustomersData = () => {
     axios
            .get("http://localhost:3001/api/select")
            .then(data => setCustomersData(data.data))
         .catch(error => console.log(error));
            

   };

 getCustomersData();
        const [Fornavn, setfornavn] = useState('');
        const [Etternavn, setetternavn] = useState('');
        const [Klasse, setklasse] = useState('');
        const [Hobby, sethobby] = useState('');
        const [Kjonn, setkjonn] = useState('');
        const [DatamskinId, setdatamskinid] = useState('');

        async function handleUpdate(event) {
        event.preventDefault();     

        const dataToUpdate = {
          Fornavn: Fornavn,
          Etternavn: Etternavn,
          Klasse: Klasse,
          Hobby: Hobby,
          Kjonn: Kjonn,
          DatamskinId: DatamskinId,
          
        }
          try {
            await axios.post ('http://localhost:3001/api/insert', 
            {headers:{"content-type":"application/json"}, 
            body:JSON.stringify(dataToUpdate)}
            )
          } catch (error){
            console.log("internal server error 500")
          }
        // axios.post ('http://localhost:3001/api/insert', {headers:{"content-type":"application/json"}, body:JSON.stringify(dataToUpdate)}) 
        // .then(res => console.log(res.data))
        // .catch(err => console.log(err))


     setfornavn('');
     setetternavn('');
     setklasse('');
     sethobby('');
     setkjonn('');
     setdatamskinid('');
    }


          
        
    return (
    <>
    <table>
              <thead>
                <tr>
                  <th>ElevId:</th>
                  <th>Fornavn:</th>
                  <th>Etternavn:</th>
                  <th>Klasse:</th>
                  <th>Hobby:</th>
                  <th>Kjonn:</th>
                  <th>DatamaskinID:</th>
                  
                </tr>
              </thead>
              <tbody>
                {customersData.map((customer, index) => (
                  <tr key={index}>
                    <td>{customer.ElevID}</td>
                    <td>{customer.Fornavn}</td>
                    <td>{customer.Etternavn}</td>
                    <td>{customer.Klasse}</td>
                    <td>{customer.Hobby}</td>
                    <td>{customer.Kjonn}</td>
                    <td>{customer.DatamaskinID}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className='dobox'>
        <form onSubmit={e => handleUpdate(e)}>
        <p>Lag en ny bruker:</p>
    <input type="text" placeholder="Fornavn" onChange={(e) => setfornavn(e.target.value)} />
    <input type="text" placeholder="Etternavn" onChange={(e) => setetternavn(e.target.value)} />
    <input type="number" placeholder="Klasse" onChange={(e) => setklasse(e.target.value)} />
    <input type="text" placeholder="Hobby" onChange={(e) => sethobby(e.target.value)} />
    <input type="text" placeholder="Kjonn" onChange={(e) => setkjonn(e.target.value)} />
    <input type="number" placeholder="DatamaskinID" onChange={(e) => setdatamskinid(e.target.value)} />
    <button onClick={handleUpdate} className='bmtn'>Lag ny bruker</button>
</form>
</div>
</>
)
    
}