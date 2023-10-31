import './App.css';
import { useState } from 'react';
import Student from './student'
import Empty from './empty'
import json from './profiles'


function Class() {
  const [list, setList] = useState(json.elever)
    
  function ShuffleArray(array){
      for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
      }
      setList([...array])
      console.log(list)
  }

  return (
        <div className='bigbox'>
       
      <div className='teach'>
         <div className="shuffleButton">
            <button onClick={() => ShuffleArray(list)}>Shuffle</button>
        </div>
       <Student name='Teacher'/>
      </div>
      
      <div className='row1'>
        <Student name={list[7].navn}/>
        <Student name={list[8].navn}/>
        <Empty />
        <Student name={list[4].navn}/> 
        <Student name={list[5].navn}/>
        <Student name={list[3].navn}/>
      </div>

      <div className='row2'>
      <Student name=""/>
      <Student name=""/>
      <Empty />
      <Student name={list[0].navn}/>
      <Student name={list[1].navn}/>
      <Student name={list[2].navn}/>
      </div>

      <div className='row3'>
      <Student name=""/>
      <Student name=""/>
      <Empty />
      <Student name=""/>
      <Student name={list[9].navn}/>
      <Student name={list[10].navn}/>
      </div>



    </div>
  );
}

export default Class;
