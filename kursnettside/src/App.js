import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Navbar from './main components/navbar'
import Mainbox from './main components/mainbox'

function App() {
  return (
    <>
    <Navbar />
  <Routes> 
    <Route path='/' element={<Mainbox />}/>
  </Routes>
  </>
  );
}

export default App;
