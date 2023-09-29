import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Student from './student'
import Empty from './empty'
import Layout from './pages/layout'
import Profile from './StudentID'

function App() {
  return (
    <div className='bigbox'>

<nav>
            <Link to="/mlem">Home</Link>
            <Link to="/blogs">Blogs</Link>
            <Link to="/contact">Contact</Link>
      </nav>

<Routes>
  <Route path='/' element={<Layout />}/>
  <Route path='/:profile' element={<Profile />}/>
</Routes>

      <div className='teach'>
       <Student name='Teacher'/>
      </div>

      <div className='row1'>
        <Student name="Martin"/>
        <Student name="Mathias"/>
        <Empty />
        <Student name="Kevin"/> 
        <Student name=""/>
        <Student name="Andreas"/>
      </div>

      <div className='row2'>
      <Student name="Falk"/>
      <Student name="Sander"/>
      <Empty />
      <Student name="Ylva"/>
      <Student name="Vanessa"/>
      <Student name="Chen"/>
      </div>

      <div className='row3'>
      <Student name=""/>
      <Student name=""/>
      <Empty />
      <Student name=""/>
      <Student name="Luz"/>
      <Student name="Frithjof"/>
      </div>

    </div>
  );
}

export default App;
