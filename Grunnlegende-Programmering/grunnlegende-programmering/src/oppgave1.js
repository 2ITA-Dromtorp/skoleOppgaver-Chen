import './App.css'


function oppgave1(){
    return(
       <div>
        <h3>oppgave1</h3>
        <p>se console for mer info</p>
        <DeloppgaveA />
        <DeloppgaveB />
        <DeloppgaveC />
        <DeloppgaveD />
       </div>
    );
}



let test1 = 8;
let value8 = "number"
console.log(test1)
function DeloppgaveA(){
    return(
        <div className="DeloppgaveA">
            <h3>DeloppgaveA</h3>
            <p> let test = {test1}</p>
            <p> verdi = {value8}</p>
        </div>
          );
}

let test2 = "testverdi";
let valueString = "string";
function DeloppgaveB (){
    return(
    <div className="DeloppgaveB">
        <h3>DeloppgaveB</h3>
        <p>let test = {test2}</p>
        <p>verdi = {valueString}</p>
    </div>
    );
}

let test3 = 2*3;
let product = test3;
console.log("2*3", product)
function DeloppgaveC (){
    return(
        <div className='DeloppgaveC'>
            <h3>DeloppgaveC</h3>
            <p>let test3 = 2*3</p>
            <p>let product = test3</p>
        </div>
    )
}

let test4 = 3/4;
let broek = test4;
console.log("2/3", test4)
function DeloppgaveD (){
    return(
        <div className='DeloppgaveD'>
            <h3>DeloppgaveD</h3>
            <p>let test4 = 3/4</p>
            <p>let broek = test4</p>
        </div>
    )
}


function DeloppgaveE (){
    return(
        <div className='DeloppgaveE'>
            <h3>DeloppgaveE</h3>
            <p>let test4 = 3/4</p>
            <p>let broek = test4</p>
        </div>
    )
}


export default oppgave1;