import logo from './images/logo.svg';
import './App.css';
import Oppgave1 from './oppgave1';
import Oppgave2 from './oppgave2';
import Shit from './throwawayShit';
import Clock from './clock';
import Apibtn from './pictureApi';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Oppgave1 />
        <Oppgave2 />
        <Clock />
        <Apibtn />
        {/* <Shit />
         <img src={logo} className="App-logo" alt="logo" />  */}
         
        <p>
           reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          
        </a>
      </header>
    </div>
  );
}

export default App;
