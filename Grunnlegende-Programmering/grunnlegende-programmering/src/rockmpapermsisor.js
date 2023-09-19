import"./App.css";
import { useState } from "react";


export default function Rockmpapermsisor (){
    const [num, setnum] = useState(3)
    const [ranNum, setranNum] = useState(Math.floor(Math.random()*num))
    const [yes, setyes] = useState(false)

    function BtnRomk (){
        setnum(0)
        setranNum(Math.floor(Math.random()*num))
        console.log("romk")
        }
    function BtnSimser (){
        setnum(1)
        setranNum(Math.floor(Math.random()*num))
        console.log("simser")
    }
    function BtnPamper (){
        setnum(2)
        setranNum(Math.floor(Math.random()*num))
        console.log("pamper")
    }
    

    return(
    <div className="rockpapersisor">
    <h1>P1 {num} </h1>
    <div className="bmtn">
    <button onClick={BtnRomk}>rock</button> <button onClick={BtnSimser}>sisor</button> <button onClick={BtnPamper}>paper</button>
    </div>
    <h1>winner</h1>
    <h1>Bot {ranNum}</h1>
    </div>
    )
}