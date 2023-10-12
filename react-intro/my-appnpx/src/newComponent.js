import './App.css';
import spin from './App';
import logo from './logo.svg'
import pic from './amogus.png'



function MyButton() {
    function handleClick(){
        const test = document.getAnimations().forEach((animation) => {
          animation.playbackRate *= 2;
          });
    }

    return (
      <button onClick={handleClick}>
        caet
      </button>
    );
  }
  
  
  export default function MyApp() {
    return (
      <div>
        <h1>Meow</h1>
        <MyButton />
      </div>
    );
  }

  function AboutPage() {
    return (
      <>
        <h1>About</h1>
        <p>Hello there.<br />How do you do?</p>
        <img className="avatar" />
      </>
    );
  }

  