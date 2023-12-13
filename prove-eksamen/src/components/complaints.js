// CombinedComponent.js
import React, { useState } from 'react';
import '../App.css';
import Navbar from './navbat';

const CombinedComponent = () => {
  const [formData, setFormData] = useState({
    problem: '',
    name: '',
    email: '',
    phoneNumber: '',
    discoveryDate: '',
  });

  const [complaints, setComplaints] = useState([]);
  const [visibility, setVisibility] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = () => {
    setComplaints([...complaints, formData]);
    setFormData({
      problem: '',
      name: '',
      email: '',
      phoneNumber: '',
      discoveryDate: '',
    });
    setVisibility({ ...visibility, [complaints.length]: true });
    console.log('Submitted Form Data:', formData);
  };

  const toggleInfoVisibility = (index) => {
    setVisibility((prevVisibility) => ({
      ...prevVisibility,
      [index]: !prevVisibility[index],
    }));
  };

  return (
    <>
      <Navbar />
      <div className='mainbox'>
        <div className='contentBox'>
          <p>Hva er problemt ditt?</p>
          <input
            type='text'
            name='problem'
            placeholder='skriv inn problemet'
            className='inputP'
            value={formData.problem}
            onChange={handleInputChange}
          />
          <br />
          <p>Hvem er det som melder inn problemet?</p>
          <input
            type='text'
            name='name'
            placeholder='navnet på firmaet'
            className='input'
            value={formData.name}
            onChange={handleInputChange}
          />
          <br />
          <input
            type='email'
            name='email'
            placeholder='skriv inn mailen din/firmaet'
            className='input'
            value={formData.email}
            onChange={handleInputChange}
          />
          <br />
          <input
            type='number'
            name='phoneNumber'
            placeholder='skriv inn telefon nummeret'
            className='input'
            value={formData.phoneNumber}
            onChange={handleInputChange}
          />
          <br />
          <p>Når fant du feilen?</p>
          <input
            type='datetime-local'
            name='discoveryDate'
            placeholder='når problemet var oppdaget'
            className='input'
            value={formData.discoveryDate}
            onChange={handleInputChange}
          />
          <button className='button' onClick={handleFormSubmit}>
            Send inn
          </button>
        </div>
        <div className='contentBox'>
          <h1>Kunde forespørsler:</h1>
          {complaints.map((complaint, index) => (
            <div key={index}  className={`complaint-item ${visibility[index] ? 'visible' : 'hidden'}`}
            style={{ backgroundColor: visibility[index] ? '#ef3452' : '#009966' }}>
              {visibility[index] && (
                <div>
                  <p>Problemet : {complaint.problem}</p>
                  <p>Firma : {complaint.name}</p>
                  <p>Mail : {complaint.email}</p>
                  <p>Tlf nummer : {complaint.phoneNumber}</p>
                  <p>Dato : {complaint.discoveryDate}</p>
                </div>
              )}
              <button className='button2' onClick={() => toggleInfoVisibility(index)}>
                {visibility[index] ? 'Resolve' : 'Unresolve?'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CombinedComponent;
