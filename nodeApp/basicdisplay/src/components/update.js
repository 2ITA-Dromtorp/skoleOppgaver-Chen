import '../App.css';
import axios from 'axios';
import { useState } from 'react';


export default function UPDATE() {
    const [customersData, setCustomersData] = useState([]);
    const getCustomersData = () => {
        axios
            .get("http://localhost:3001/api/select")
            .then(data => setCustomersData(data.data))
            .catch(error => console.log(error));
      };

      getCustomersData();

      const [ElevID, setelevid] = useState('');
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
          ElevID: ElevID
        }
          try {
            await axios.put ('http://localhost:3001/api/update', {
              headers:{"content-type":"application/json"}, 
              body:JSON.stringify(dataToUpdate)
            }) 
           console.log(dataToUpdate)
          } catch (error) {
            console.log("internal server error 500") 
          }
            // axios.put ('http://localhost:3001/api/update', {headers:{"content-type":"application/json"}, body:JSON.stringify(dataToUpdate)}) 
            // .then(res => console.log(res.data))
            // .catch(err => console.log(err))


            setfornavn('');
            setetternavn('');
            setklasse('');
            sethobby('');
            setkjonn('');
            setdatamskinid('');
            setelevid('');
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
                    <p>Oppdater en bruker:</p>
                <input type="number" placeholder="ElevID" onChange={(e) => setelevid(e.target.value)} />
                <input type="text" placeholder="Fornavn" onChange={(e) => setfornavn(e.target.value)} />
                <input type="text" placeholder="Etternavn" onChange={(e) => setetternavn(e.target.value)} />
                <input type="number" placeholder="Klasse" onChange={(e) => setklasse(e.target.value)} />
                <input type="text" placeholder="Hobby" onChange={(e) => sethobby(e.target.value)} />
                <input type="text" placeholder="Kjonn" onChange={(e) => setkjonn(e.target.value)} />
                <input type="number" placeholder="DatamaskinID" onChange={(e) => setdatamskinid(e.target.value)} />
                <button onClick={handleUpdate}>Oppdater</button>
            </form>
            </div>
            </>
    )

}