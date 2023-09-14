import { useState, useEffect } from "react"
import ConfettiExplosion from "react-confetti-explosion";


export default function Clock () {

    let time = new Date
    let timestring = time.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false});
    

    const [currentTime, SetcurrentTime] = useState(new Date);


    useEffect(()=> {
        const myInterval = setInterval(() => {
        SetcurrentTime(timestring);
        <ConfettiExplosion width={800} height={600}/>
    }, 1000);
    return () => clearInterval(myInterval);
    })


    if (timestring%2===0) {
        <ConfettiExplosion
        width={window.innerWidth}
        height={window.innerHeight}
        numberOfPieces={500}
        recycle={false}
          />;
      }

      
    return (
        <>
        <h1>Clock</h1>
        <h2>{timestring}</h2>
        </>
    )
}



