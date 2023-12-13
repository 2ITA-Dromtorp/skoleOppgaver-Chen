// Overview.js
import React, { useState } from 'react';
import '../App.css';
import Navbar from './navbat';
import Complaints from './complaints'; 

export default function Overview() {
  const [complaints, setComplaints] = useState([]);

  const handleFormSubmit = (formData) => {
    setComplaints([...complaints, formData]);
  };

  return (
    <>
      <Navbar />
      <Complaints onFormSubmit={handleFormSubmit} />
      <div className='mainbox'>
        <div className='contentBox'>
          <h1>Kunde forespørsler:</h1>
          {complaints.map((complaint, index) => (
            <div key={index}>
              <p>{complaint.problem}</p>
              <p>{complaint.name}</p>
              <p>{complaint.email}</p>
              <p>{complaint.phoneNumber}</p>
              <p>{complaint.discoveryDate}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
