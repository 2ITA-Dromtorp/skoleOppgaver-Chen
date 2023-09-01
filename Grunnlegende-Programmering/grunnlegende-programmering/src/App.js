import logo from './logo.svg';
import './App.css';
import Oppgave1 from './oppgave1';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Oppgave1 />
        <img src={logo} className="App-logo" alt="logo" />
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
