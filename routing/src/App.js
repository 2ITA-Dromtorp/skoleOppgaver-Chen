import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Student from './student'
import Empty from './empty'
import Layout from './pages/layout'
import Profile from './StudentID'
import Klassekart from './class'

function App() {
  return(
<Routes>
  <Route path='/' element={<Klassekart />}/>
  <Route path='/:profile' element={<Profile />}/>
</Routes>

  );
}

export default App;
