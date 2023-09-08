import './App.css'
import { useState, useEffect } from 'react';
import sirkel from './images/sirkel.png';
import upArrow from './images/uparrow.png';

function Oppgave2() {
    return(
        <div>
            <h2>Oppgave2</h2>
            <p>se console for mer info</p>

            <DeloppgaveA />
            <DeloppgaveB />
            <DeloppgaveC />
            <SirkelOppgave />
        </div>
    )
};

function DeloppgaveA() {
    let lengde = 8;
    let  bredde = 8;
    let sum = lengde * bredde;

    const [isButtonVisible, setButtonVisible] = useState(true);

    const handleClick = () => {
    // Toggle the visibility of the button when it's clicked
    setButtonVisible(!isButtonVisible);
    };

    return (
            <>
            <div>
            {isButtonVisible ? (
            <button onClick={handleClick}>Oppgave 2A</button>
            ) : (
                <div>
                <button onClick={handleClick}>Hide</button>
     
                <h3>Oppgave A</h3>
                <p>lengde = {lengde}  bredde = {bredde}</p>
                <p>areal = {sum}</p>
            </div>
          )}
        </div> 
            </>
        )


}

function DeloppgaveB () {
    const [isButtonVisible, setButtonVisible] = useState(true);


    const handleClick = () => {
      setButtonVisible(!isButtonVisible);
    };

    let L = 8;
    let  B = 8;
    let treKantAreal = (L * B)/2;

    
    return(
        <>
        <div>
        {isButtonVisible ? (
        <button onClick={handleClick}>Oppgave 2B</button>
        ) : (
            <div>
            <button onClick={handleClick}>Hide</button>

            <h3>Oppgave B</h3>
            <p>lengde = {L} bredde = {B}</p>
            <p>areal av trekant = {treKantAreal}</p>   
        </div>
      )}
    </div> 
        </>
    )
}

function DeloppgaveC() {
    const [isButtonVisible, setButtonVisible] = useState(true);

    const handleClick = () => {
      // Toggle the visibility of the button when it's clicked
      setButtonVisible(!isButtonVisible);
    };
    const [bredde, setBredde] = useState(0)
    const [lengde, setLengde] = useState(0)

    function updateBredde(event) {
        console.log('update field')
        console.log(event.target.value)
        setBredde(event.target.value)
    }

    function updateLengde(event) {
        console.log('update field')
        console.log(event.target.value)
        setLengde(event.target.value)

    }


    return (
        <>
   <div>
      {isButtonVisible ? (
        <button onClick={handleClick}>Oppgave 2C</button>
      ) : (

        <div>
        <button onClick={handleClick}>Skjul</button>

           <h1> Deloppgave C. </h1>
            <h2> Areal av en trekant:  </h2>
            <input type="number" value={bredde} onChange={updateBredde}/>
            <input type="number" value={lengde} onChange={updateLengde}/>
            <h3>Arealet for rektangel: {bredde * lengde} </h3>
            <h3>Arealet for trekant: {(bredde * lengde)/2}</h3>
        </div>
      )}
    </div>
        </>

    )

}


function SirkelOppgave(){
    const [count, setCount] = useState(0);
    const [isCounting, setIsCounting] = useState(false);

    function handleClickAddOne() {
      setCount(count + 1);
      }
    function handleClickMinusOne(){
        setCount(count -1);
      }

      function start () {
        setIsCounting(true)
      }
      
    function stop () {
      setIsCounting(false)
    }

    useEffect(()=>{
      let interval;

      if (isCounting) {
          interval = setInterval(() => {
            setCount((prevCount) => prevCount +1);
          }, 1000); // Decrease count every second
        } else {
          clearInterval(interval); // Stop the interval when not counting
        }
  
        return () => {
          clearInterval(interval); // Cleanup when component unmounts
        };
      }, [isCounting]);
      

    return (
      <div className='background'> 
        <h1>Pil Thingy</h1>
        <MyButton count={count} onClick={handleClickAddOne}>
        {/* <img src={upArrow} alt='up-arrow'></img> */}
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="320.000000pt" height="30.000000pt" viewBox="0 0 320.000000 320.000000" preserveAspectRatio="xMidYMid meet" className='up'> 
<metadata>
Created by potrace 1.16, written by Peter Selinger 2001-2019
</metadata>
<g transform="translate(0.000000,320.000000) scale(0.100000,-0.100000)"fill="" stroke="none">
<path d="M1278 2839 c-172 -199 -450 -520 -617 -713 -167 -193 -383 -443 -480 -554 -97 -112 -177 -210 -179 -218 -3 -12 77 -14 537 -14 l541 0 0 -670 0 -670 555 0 555 0 0 670 0 670 506 0 c430 0 505 2 502 14 -2 8 -82 106 -179 218 -97 111 -313 361 -480 554 -822 950 -930 1074 -939 1074 -5 0 -150 -163 -322 -361z"/>
</g>
</svg>  
        </MyButton>
        <img src={sirkel} alt='sirkel'></img>
        <p className='counter'>{count}</p> 

        <MyButton count={count} onClick={handleClickMinusOne}>
        {/* <img src={upArrow} alt='down-arrow' className='down'></img> */}
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="320.000000pt" height="30.000000pt" viewBox="0 0 320.000000 320.000000" preserveAspectRatio="xMidYMid meet" className='down'>
<metadata>
Created by potrace 1.16, written by Peter Selinger 2001-2019
</metadata>
<g transform="translate(0.000000,320.000000) scale(0.100000,-0.100000)" fill="" stroke="none">
<path d="M1278 2839 c-172 -199 -450 -520 -617 -713 -167 -193 -383 -443 -480 -554 -97 -112 -177 -210 -179 -218 -3 -12 77 -14 537 -14 l541 0 0 -670 0 -670 555 0 555 0 0 670 0 670 506 0 c430 0 505 2 502 14 -2 8 -82 106 -179 218 -97 111 -313 361 -480 554 -822 950 -930 1074 -939 1074 -5 0 -150 -163 -322 -361z"/>
</g>
</svg>  
        </MyButton>

        <button onClick={start}>Start Countdown</button>

        <button onClick={stop}>Stop Countdown</button>
      </div>
    );
  }

  
  function MyButton({ count, onClick, children}) {
    return (
      <button onClick={onClick}>
        {children}
      </button>
    );
  }


export default Oppgave2;