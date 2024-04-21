import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/navbar.js';
import Homepage from './Components/homepage.js';
import Signup from './Components/Signup.js';

function App() {
  return (
<>  
  <Navbar /> 
  <Routes >
    <Route path='/' element={<Signup />}/>
    <Route path='/Home' element={<Homepage />}/>
  </Routes>
</>
  );
}

export default App;
