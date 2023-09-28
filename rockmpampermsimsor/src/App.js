import './App.css';
import { useState } from "react";
import unknown from './images/Illustrasjoner_Stein_Saks_Papir/maskin_ukjent.png'
import Ppaper from './images/Illustrasjoner_Stein_Saks_Papir/spiller_papir.png'
import Prock from './images/Illustrasjoner_Stein_Saks_Papir/spiller_stein.png'
import Psissor from './images/Illustrasjoner_Stein_Saks_Papir/spiller_saks.png'
import paper from './images/Illustrasjoner_Stein_Saks_Papir/maskin_papir.png'
import rock from './images/Illustrasjoner_Stein_Saks_Papir/maskin_stein.png'
import sissor from './images/Illustrasjoner_Stein_Saks_Papir/maskin_saks.png'

function App() {
  const [ppoints, setPpoints]=useState(0)
  const [mpoints, setMpoints]=useState(0)
  const [pchoice, setPchoice]=useState({id: null , image: unknown})
  const [Mchoice, setMchoice]=useState(unknown)
  const [winner, setWinner]=useState("Unknown")


function romck(){
  setPchoice({id:0 , image:Prock});
  Play();
}
function pamper(){
  setPchoice({id:1, image:Ppaper})
  Play();
}
function simsor(){
  setPchoice({id:2, image:Psissor})
  Play();
}
function Play(){
  let n = [rock, paper, sissor];
  let rng = Math.floor(Math.random()*3);
  setMchoice(n[rng]);

  if (pchoice.id == rng) {
    setWinner('Draw');
  } else if (pchoice.id == 0 && rng == 2) {
    setWinner('Victory');
    setPpoints(ppoints+1);
  } else if (pchoice.id == 0 && rng == 1) {
    setWinner('Lost');
    setMpoints(mpoints+1);
  } else if (pchoice.id == 2 && rng == 1) {
    setWinner('Victory');
    setPpoints(ppoints+1);
  } else if (pchoice.id == 2 && rng == 0) {
    setWinner('Lost');
    setMpoints(mpoints+1);
  } else if (pchoice.id == 1 && rng == 0) {
    setWinner('Victory');
    setPpoints(ppoints+1);
  } else if (pchoice.id == 1 && rng == 2) {
    setWinner('Lost');
    setMpoints(mpoints+1);
  }
}



  return (
<div className="App-header">

    <div className='top'>

    <div className='player'>
      <img src={pchoice.image}alt='unknown'></img>
    </div>


<div className='playerPoints'>
    <h1>{ppoints}</h1>
</div>


    <div className='result'> 
      <h1>{winner}</h1>
      
    </div>

    <div className='BotPoints'>
      <h1>{mpoints}</h1>
    </div>


    <div className='bot'>
      <img src={Mchoice} alt='unknown'></img>
    </div>

</div>
    


<div className='bottom'>

    <div className='bmnt'>
      <button onClick={romck}> Rock</button>
      <button onClick={pamper}> Paper</button>
      <button onClick={simsor}>Sissor</button>

    </div>

  </div>

   
   
</div>
  );

}

export default App;
