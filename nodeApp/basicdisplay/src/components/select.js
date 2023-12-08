import '../App.css';
import axios from 'axios';
import { useState } from 'react';


export default function SELECT() {
    const [customersData, setCustomersData] = useState([]);

    const getCustomersData = () => {
        axios
            .get("http://localhost:3001")
            .then(data => setCustomersData(data.data))
            .catch(error => console.log(error));
      };


          getCustomersData();
    
          return (
            <table>
              <thead>
                <tr>
                  <th>DatamskinId:</th>
                  <th>ElevId:</th>
                  <th>Etternavn:</th>
                  <th>Fornavn:</th>
                  <th>Hobby:</th>
                  <th>Kjonn:</th>    
                  <th>Klasse:</th>   
                </tr>
              </thead>
              <tbody>
                {customersData.map((customer, index) => (
                  <tr key={index}>
                    <td>{customer.DatamaskinID}</td>
                    <td>{customer.ElevID}</td>
                    <td>{customer.Etternavn}</td>
                    <td>{customer.Fornavn}</td>
                    <td>{customer.Hobby}</td>
                    <td>{customer.Kjonn}</td>
                    <td>{customer.Klasse}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          );

}