import Navbar from './components/navbar';
import Login from './components/login';
import easterEgg from './components/easterEgg';
import { Route, Routes, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
<Navbar />
<Routes>
<Route path="/" element={<Login />} />
<Route path="/easterEgg" element={<easterEgg />} />
</Routes>
</>
  );
}

export default App;
