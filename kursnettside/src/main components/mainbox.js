import '../App.css'
import Mlem from '../imgs/logo.svg'

export default function contentbox () {
    return(
        <div className='mainBox'>
            
            <div className='blueBox'>
                <div className='info'>
                <h1>Om kurs</h1>



                <p className='maintext'>lorem ipsum lorem ipsum</p>

                </div>
                <div className='kurs'>
                    <h1>våre kurs</h1>

                        <div className='tilbudtkurs'>

                            <div className='kursBox'>

                                <img src={Mlem}></img>

                                <p className='maintext'>mlem</p>
                            </div>

                            <div className='kursBox'>
                                <p className='maintext'>mlem</p>
                            </div>

                            <div className='kursBox'>
                                <p className='maintext'>mlem</p>
                            </div>    

                            <div className='kursBox'>
                                <p className='maintext'>mlem</p>
                            </div>    

                        </div>
                </div>
                
            </div>

        </div>
    )
}