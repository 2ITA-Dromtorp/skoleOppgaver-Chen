import { useState, useEffect } from "react"

export default function Clock () {

    let time = new Date
    let timestring = time.toTimeString();

    const [currentTime, SetcurrentTime] = useState(new Date);


    useEffect(()=> {
        setInterval(() => {
        
        SetcurrentTime(new Date);
    }, 1000);
        
    console.log("mlem")
    
    return () => clearInterval(useEffect);
    })
        

    return (
        <>
        <h1>Clock</h1>

        <h2>{timestring}</h2>
        </>
    )
}