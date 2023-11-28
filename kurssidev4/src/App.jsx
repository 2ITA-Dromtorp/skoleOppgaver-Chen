import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Navbar from './components/navbar'
import Mainbox from './components/mainbox'
import Info from './components/kursInfoSide'
import Login from './components/login'

function App() {
  return (
    <>
      <Navbar />
      <Routes> 
        <Route path='/' element={<Mainbox />}/>
        <Route path='/:Kursnavn' element={<Info />}/>
        <Route path='/:Kursnavn/Login' element={<Login />}/>
      </Routes>
    </>
  );
}

export default App;
