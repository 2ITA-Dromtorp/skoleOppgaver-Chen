import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Navbar from './main components/navbar'
import Mainbox from './main components/mainbox'
import Info from './main components/kursInfoSIde'
import Login from './main components/login'

function App() {
  return (
    <>
    <Navbar />
  <Routes> 
    <Route path='/' element={<Mainbox />}/>
    <Route path='/:Kursnavn' element={<Info />}/>
    <Route path='/Login' element={<Login />}/>
  </Routes>
  </>
  );
}

export default App;
