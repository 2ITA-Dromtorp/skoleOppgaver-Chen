import './App.css'
import ConfettiExplosion from 'react-confetti-explosion';
import { useState, useEffect } from "react"

function MyStuff (){
    return(
    <MyButton />
    )
}


function MyButton() {
    function speedUp(){
        const up = document.getAnimations().forEach((animation) => {
          animation.playbackRate *= 2;
          });
    }

    function slowDown (){
        const down = document.getAnimations().forEach((animation) => {
            animation.playbackRate /= 2;
            });
    }

    return (
    <>
    <button onClick={speedUp}>
        caet
    </button>
    <button onClick={slowDown}> 
         mlem
    </button>
    
      </>
    );
  }

  function Booom(){
    const [count, setCount] = useState(0);
    const [isExploding, setIsExploding] = useState(false);

 
    useEffect(() => {
        let myInterval = setInterval (()=> {
            setCount(count - 1)

            if (count == 0) {
                setCount(1);
                setIsExploding(true);
            } else {
                setIsExploding(false);
            }
        }, 500)

        return () => clearInterval(myInterval);
    })

 
    let bigBang = {
        force: 1,
        duration: 1000,
        particleCount: 800,
        floorHeight: 1600,
        floorWidth: 2000,
    }

    return (
        <div className='boiom'>
            {isExploding && <ConfettiExplosion {...bigBang}/>}
        </div>
    )
  }
  
  
  export default function MyApp() {
    return (
      <div>
        <Booom />
        <h1>SPEED</h1>
        <MyButton />
        
      </div>
    );
  }

