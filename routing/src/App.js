import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Profile from './StudentID'
import Klassekart from './class'
import Login from './login'

function App() {
  return(
<Routes>
  <Route path='/' element={<Login />}/>
  <Route path='/Klassekart' element={<Klassekart />}/>
  <Route path='/:profile' element={<Profile />}/>
</Routes>

  );
}

export default App;
