import '../App.css';
import axios from 'axios';
import { useState } from 'react';


export default function DELETE() {
    const [customersData, setCustomersData] = useState([]);
    const getCustomersData = () => {
        axios
               .get("http://localhost:3001/api/select")
               .then(data => setCustomersData(data.data))
            .catch(error => console.log(error));  
      };
   
    getCustomersData();
    const [ElevID, setelevid] = useState('');
   
async function handleDelete(event) {
    event.preventDefault();

const dataToDelete = {
    ElevID: ElevID
}

alert(dataToDelete.ElevID)
    try {
      await axios.delete('http://localhost:3001/api/delete', 
      {data : dataToDelete}
      )
    } catch (error) {
      console.error("500: internal server error")
    }

        // .then(res => console.log(res.data))
        // .catch(err => console.log(err))
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
            <div className="dobox">
        <form onSubmit={e => handleDelete(e)}>
            <p>Slett en elev:</p>
            <input type="number" placeholder="ElevID" onChange={(e) => setelevid(e.target.value)}/>
            <button onClick={handleDelete}>Delete</button>
        </form>
        </div>
        </>
    )

}