import './App.css'

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
  
  
  export default function MyApp() {
    return (
      <div>
        <h1>SPEED</h1>
        <MyButton />
      </div>
    );
  }

