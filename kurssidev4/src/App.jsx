import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Navbar from './components/navbar'
import Mainbox from './components/mainbox'
import Info from './components/kursInfoSide'
import SignUp from './components/SignUp'
import Login from './components/login'
import Confirmation from './components/popUpConfirmation'

function App() {
  return (
    <>
      <Navbar />
      <Routes> 
        <Route path='/' element={<Mainbox />}/>
        <Route path='/:Kursnavn' element={<Info />}/>
        <Route path='/:Kursnavn/Sign-up' element={<SignUp />}/>
        <Route path='/:Kursnavn/Login' element={<Login />}/>
        <Route path='/Sign-up' element={<SignUp />}/>
        <Route path='/Login' element={<Login />}/>
        <Route path='/Sign-Inn-success' element={<Confirmation/>}/>
      </Routes>
    </>
  );
}

export default App;
