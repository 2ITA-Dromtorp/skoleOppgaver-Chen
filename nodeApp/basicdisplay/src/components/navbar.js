import '../App.css';
import { useState } from 'react';
import SELECT from './select';
import DELETE from './delete';
import INSERT from './insert';
import UPDATE from './update';

export default function Navbar() {
    const [select, setSelect] = useState(<SELECT/>);

    function handleSelect() {
        setSelect(<SELECT/>);
    }

    function handleUpdate() {
        setSelect(<UPDATE/>);
    }

    function handleDelete() {
        setSelect(<DELETE/>);
    }

    function handleInsert() {
        setSelect(<INSERT/>);
    }



    return (
        <>
            <div className="App">
                <div className="navbar">
                    <button className="navbar-item" onClick={handleSelect}>SELECT</button>
                    <button className="navbar-item" onClick={handleUpdate}>UPDATE</button>
                    <button className="navbar-item" onClick={handleInsert}>INSERT</button>
                    <button className="navbar-item" onClick={handleDelete}>DELETE</button>
                </div>
                <div className="mainbox">
                    <div className='content'>
                            {select}
                    </div>
                </div>
            </div>
        </>
    );
}
