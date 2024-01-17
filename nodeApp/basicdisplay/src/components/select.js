import '../App.css';
import axios from 'axios';
import { useState } from 'react';


export default function SELECT() {
    const [customersData, setCustomersData] = useState([]);

    const getCustomersData = () => {
        axios
            .get("http://localhost:3001/api/select")
            .then(data => setCustomersData(data.data))
            .catch(error => console.log(error));
      };


          getCustomersData();
    
          return (
            <table>
              <thead>
                <tr>
                  <th>ElevId:</th>
                  <th>Fornavn:</th>
                  <th>Etternavn:</th>
                  <th>Hobby:</th>
                  <th>Kjonn:</th>    
                  <th>Klasse:</th>
                  <th>DatamskinId:</th>   
                </tr>
              </thead>
              <tbody>
                {customersData.map((customer, index) => (
                  <tr key={index}>
                    <td>{customer.ElevID}</td>
                    <td>{customer.Fornavn}</td>
                    <td>{customer.Etternavn}</td>
                    <td>{customer.Hobby}</td>
                    <td>{customer.Kjonn}</td>
                    <td>{customer.Klasse}</td>
                    <td>{customer.DatamaskinID}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          );

}