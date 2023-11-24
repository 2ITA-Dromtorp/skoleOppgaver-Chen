import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/navbar'
import Mainbox from './components/mainbox'
import Info from './components/kursInfoSide'
import Login from './components/login'

function App() {
  useEffect(() => {
    fetch('/test', {
        method:'POST',
        headers:{
          "content-type":"application/json",
        },
        body:JSON.stringify({data:"heihei"}),
    })
}, [])
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
