import './App.css';

export default function Navbar() {

    return (
        <>
            <div className="App">
                <div className="navbar">
                    <button className="navbar-item">SELECT</button>
                    <button className="navbar-item">UPDATE</button>
                    <button className="navbar-item">INSERT</button>
                    <button className="navbar-item">DELETE</button>
                </div>
                <div className="mainbox">
                    <div className='content'>

                    </div>
                </div>
            </div>
        </>
    );
}
