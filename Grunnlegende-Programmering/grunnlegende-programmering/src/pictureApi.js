import "./App.css";
import { useState, useEffect } from "react"

    export default function Apibtn () {
        let [dogImage, setDogImage] = useState(null)
        // 3. Create out useEffect function
    
        const fetchRandomDog = () => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
            // 4. Setting *dogImage* to the image url that we received from the response above
        .then(data => setDogImage(data.message))
    };
        useEffect(() => {
        fetchRandomDog();
    },[])

        return(
            <>
            <button onClick={fetchRandomDog}> dog image </button>
            {dogImage && <img src={dogImage} ></img>}
            </>
        );
    }   