import './App.css';
import Student from './student'
import Empty from './empty'


function Class() {
  return (
    <div className='bigbox'>
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

export default Class;
