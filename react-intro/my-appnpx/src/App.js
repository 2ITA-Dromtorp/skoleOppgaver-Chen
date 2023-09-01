import pic from './amogus.png';
import logo from './logo.svg';
import './App.css';
import MyApp from './newComponent';
const spin = document.getElementById("spon");


const user = {
    name: "sir",
    }
    

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={pic} id="spon" className="App-logo" alt="logo" />
        <MyApp/>
        <h1>
        {user.name}
        </h1>
      </header>
    </div>
  );
}


  

export default App;
