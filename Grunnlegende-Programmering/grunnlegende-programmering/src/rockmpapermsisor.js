import"./App.css";
import { useState } from "react";


export default function Rockmpapermsisor (){
    const [num, setnum] = useState(3)
    const [usenum, setusenum] = useState(3)
    let [botNum, setbotNum] = useState(Math.floor(Math.random()*num))
    const [yes, setyes] = useState(false)
    const [isButtonVisible, setButtonVisible] = useState(true);


    function BtnRomk (){
        setusenum(0)
        setbotNum(Math.floor(Math.random()*num))
        if ({botNum}==1){
            console.log("mlem")
        } 
        }
    function BtnSimser (){
        setusenum(1)
        setbotNum(Math.floor(Math.random()*num))
        if ({setbotNum}==2){
            console.log("mlem2")
        };
    }
    function BtnPamper (){
        setusenum(2)
        setbotNum(Math.floor(Math.random()*num))
        if ({setbotNum}==0){
            console.log("mlem3")
        };
    }
 
     
        

            
    

    return(

            <div className="rockpapersisor">
                <h1></h1>
                <h1>P1 {usenum} </h1>
                    <div className="bmtn">
                    <button onClick={BtnRomk}>rock</button> 
                    <button onClick={BtnSimser}>sisor</button> 
                    <button onClick={BtnPamper}>paper</button>
                </div>
                <h1>bot {botNum}</h1>
            </div>

      
    )
}
