import './App.css';
import Overview from './components/Overview.js';
import Complaints from './components/complaints.js';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Complaints />} /> 
        <Route path='/Overview' element={<Overview />} />
      </Routes>
    </Router>
  );
}

export default App;
