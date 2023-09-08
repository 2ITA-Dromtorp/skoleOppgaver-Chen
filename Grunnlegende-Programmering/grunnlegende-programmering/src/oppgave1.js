import './App.css'


function oppgave1(){
    return(
       <div>
        <h2>oppgave1</h2>
        <p>se console for mer info</p>
        <DeloppgaveA />
        <DeloppgaveB />
        <DeloppgaveC />
        <DeloppgaveD />
       </div>
    );
}


function DeloppgaveA (){
    let test1 = 8;
    let value8 = "number"

function HandleDeloppgaveA(){
    console.log({test1}, {value8});
    const oppg1 = document.querySelector(".DeloppgaveA");
    const btnONE = document.querySelector(".btn1");
    const btnHide = document.querySelector(".hide");
    if (oppg1) {
        oppg1.style.display = "block";
    }
    if (btnONE) {
        btnONE.style.display = "none";
    }
    if (btnHide) {
        btnHide.style.display = "block";
    }
}

function HandleHide1(){
    const oppg1 = document.querySelector(".DeloppgaveA");
    const btnONE = document.querySelector(".btn1");
    const btnHide = document.querySelector(".hide");
    if (oppg1) {
        oppg1.style.display = "none";
    }
    if (btnONE) {
        btnONE.style.display = "block";
    }
    if (btnHide) {
        btnHide.style.display = "none";
    }
}

return(
<>
    <button onClick={HandleDeloppgaveA} className="btn1">
    oppgave1
    </button>

    <button onClick={HandleHide1} className='hide'>
    hide
    </button>

    <div className="DeloppgaveA">
    <h3>DeloppgaveA</h3>
    <p> let test = {test1}</p>
    <p> verdi = {value8}</p>
    </div>
</>
    );
}






function DeloppgaveB (){
    let test2 = "testverdi";
    let valueString = "string";

    function HandleDeloppgaveB(){
    console.log({test2}, {valueString});
    const oppg2 = document.querySelector(".DeloppgaveB");
    const btnTWO = document.querySelector(".btn2");
    const btnHide = document.querySelector(".hide1");
    if (oppg2) {
        oppg2.style.display = "block";
    }
    if (btnTWO) {
        btnTWO.style.display = "none";
    }
    if (btnHide) {
        btnHide.style.display = "block";
    }
}
    
    function HandleHide2(){
        const oppg2 = document.querySelector(".DeloppgaveB");
        const btnTWO = document.querySelector(".btn2");
        const btnHide = document.querySelector(".hide1");
        if (oppg2) {
            oppg2.style.display = "none";
        }
        if (btnTWO) {
            btnTWO.style.display = "block";
        }
        if (btnHide) {
            btnHide.style.display = "none";
        }
    }

    return(
        <>
        <button onClick={HandleDeloppgaveB} className="btn2">
        oppgave2
        </button>
    
        <button onClick={HandleHide2} className='hide1'>
        hide
        </button>

    <div className="DeloppgaveB">
        <h3>DeloppgaveB</h3>
        <p>let test = {test2}</p>
        <p>verdi = {valueString}</p>
    </div>
    </>
    );
}








function DeloppgaveC (){
    let test3 = 2*3;
    let product = test3;

    function HandleDeloppgaveC(){
        console.log("2*3", {product})
        const oppg3 = document.querySelector(".DeloppgaveC");
        const btnTWO = document.querySelector(".btn3");
        const btnHide = document.querySelector(".hide2");
        if (oppg3) {
            oppg3.style.display = "block";
        }
        if (btnTWO) {
            btnTWO.style.display = "none";
        }
        if (btnHide) {
            btnHide.style.display = "block";
        }
    }
        
        function HandleHide3(){
            const oppg3 = document.querySelector(".DeloppgaveC");
            const btnTWO = document.querySelector(".btn3");
            const btnHide = document.querySelector(".hide2");
            if (oppg3) {
                oppg3.style.display = "none";
            }
            if (btnTWO) {
                btnTWO.style.display = "block";
            }
            if (btnHide) {
                btnHide.style.display = "none";
            }
        }

    return(
        <>
        <button onClick={HandleDeloppgaveC} className="btn3">
        oppgave3
        </button>
    
        <button onClick={HandleHide3} className='hide2'>
        hide
        </button>
        <div className='DeloppgaveC'>
            <h3>DeloppgaveC</h3>
            <p>let test3 = 2*3</p>
            <p>let product = test3</p>
        </div>
        </>
    )
}


function DeloppgaveD (){
    let test4 = 2/3;
    let broek = test4;

    function HandleDeloppgaveD(){
        console.log("2/3", {broek})
        const oppg3 = document.querySelector(".DeloppgaveD");
        const btnTWO = document.querySelector(".btn4");
        const btnHide = document.querySelector(".hide3");
        if (oppg3) {
            oppg3.style.display = "block";
        }
        if (btnTWO) {
            btnTWO.style.display = "none";
        }
        if (btnHide) {
            btnHide.style.display = "block";
        }
    }
        
        function HandleHide3(){
            const oppg3 = document.querySelector(".DeloppgaveD");
            const btnTWO = document.querySelector(".btn4");
            const btnHide = document.querySelector(".hide3");
            if (oppg3) {
                oppg3.style.display = "none";
            }
            if (btnTWO) {
                btnTWO.style.display = "block";
            }
            if (btnHide) {
                btnHide.style.display = "none";
            }
        }

    return(
        <>
        <button onClick={HandleDeloppgaveD} className="btn4">
        oppgave4
        </button>
        <button onClick={HandleHide3} className='hide3'>
        hide
        </button>
        <div className='DeloppgaveD'>
            <h3>DeloppgaveD</h3>
            <p>let test4 = 3/4</p>
            <p>let broek = test4</p>
        </div>
        </>
    )
}



export default oppgave1;