import Navbar from './components/navbar';
import SignUp from './components/signUp';
import Login from './components/login';
import BBOP from './components/easterEgg';
import { Route, Routes} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
<Navbar />
<Routes>
<Route path="/" element={<SignUp />} />
<Route path="/Login" element={<Login />} />
<Route path="/BBOP" element={<BBOP />} />
</Routes>

</>
  );
}

export default App;
