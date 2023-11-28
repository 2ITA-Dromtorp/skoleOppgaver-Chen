import '../App.css'
import { Link } from 'react-router-dom';
import Buff from '../imgs/buffCat.jpg'
import Smort from '../imgs/smort.jpg'
import Home from '../imgs/home.png'
import Norsk from '../imgs/noursk.jpg'



export default function contentbox (props) {
    let name = props.name;

    return(
        <div className='mainBox'>
            <div className='blueBox'>
            <div className='airbox'>
            <p className='air'>mlemmlemmlem</p>
            </div>
                <div className='info'>
                <h1>Generell informasjon om kursene</h1>
                <p className='maintext'>Maecenas consequat sagittis eros. Sed gravida ultricies ex sed ullamcorper. Nulla facilisi. Sed mauris felis, sodales porta ante non, maximus suscipit tellus. Fusce id ligula mauris. Donec ac scelerisque velit. Donec congue neque neque, nec eleifend lectus aliquet id. Ut nec justo posuere, viverra velit ac, posuere massa. Sed quis cursus lectus. Suspendisse eget interdum massa. Fusce sit amet magna dapibus, blandit lacus nec, aliquam ante. Mauris velit sem, pellentesque eget orci laoreet, rhoncus porttitor ex. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean in arcu at purus tempus tincidunt. Vestibulum eget nulla auctor, mollis nisl non, ultrices lacus. Nulla hendrerit sollicitudin erat, mattis iaculis odio tincidunt nec. Nunc efficitur lacus nec pharetra sagittis. Sed sit amet pharetra turpis. Sed quis tristique diam, mattis fermentum nunc. Nulla tincidunt dolor congue, lobortis diam non, porta eros. In et augue a velit tristique tincidunt. Morbi luctus sodales urna a dictum. Aliquam pulvinar vitae diam quis ultrices. Nullam fringilla imperdiet sodales. Cras rhoncus in massa sit amet molestie. Sed tempus velit blandit blandit pretium. Integer convallis metus vel magna vulputate posuere.</p>

                </div>
                <div className='kurs'>
                    <h1>Kursene vi tilbyr</h1>
                        <div className='tilbudtkurs'>
                        
                            <Link to={name = 'Kroppsovning'} className='kursBox' id='kroppsøvning'>
                                <img src={Buff} height={200} width={200} alt='et bildet av en stor sterk katt' className='mainimg'></img>
                                <h2 className='maintext'>Kroppsøvning</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at quam libero. In vitae rutrum ex. Vestibulum elementum eros quam, eget vestibulum mauris interdum in. Proin accumsan tempor facilisis. Nulla faucibus, eros in scelerisque pharetra, turpis urna condimentum mauris, ac egestas metus sem a massa.</p>
                                <Link to={name = 'Kroppsovning'} className='homer'><p>klik for å les mer</p></Link>
                             </Link>

                            <Link to={name = 'Grunleggende-datakunnskap'}  className='kursBox' id='datakunnskap'>
                            <img src={Smort} height={200} width={200} alt='et bildet av en katt forran en skjerm' className='mainimg'></img>
                                <h2 className='maintext'>Datakunnskap</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at quam libero. In vitae rutrum ex. Vestibulum elementum eros quam, eget vestibulum mauris interdum in. Proin accumsan tempor facilisis. Nulla faucibus, eros in scelerisque pharetra, turpis urna condimentum mauris, ac egestas metus sem a massa.</p>
                                <Link to={name = 'Grunleggende-datakunnskap'} className='homer'><p>klik for å les mer</p></Link>
                            </Link>

                            <Link to={name = 'Heimkunnskap'}  className='kursBox' id='heimkunnskap'>
                            <img src={Home} height={200} width={200} alt='et bildet av et hus logo' className='mainimg' ></img>
                                <h2 className='maintext'>Heimkunnskap</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at quam libero. In vitae rutrum ex. Vestibulum elementum eros quam, eget vestibulum mauris interdum in. Proin accumsan tempor facilisis. Nulla faucibus, eros in scelerisque pharetra, turpis urna condimentum mauris, ac egestas metus sem a massa.</p>
                                <Link to={name = 'Heimkunnskap'} className='homer'><p>klik for å les mer</p></Link>
                            </Link>    

                            <Link to={name = 'Norsk'} className='kursBox' id='norsk'>
                            <img src={Norsk} height={200} width={200} alt='et bildet av et norsk flagg' className='mainimg' ></img>
                                <h2 className='maintext'>Norsk</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at quam libero. In vitae rutrum ex. Vestibulum elementum eros quam, eget vestibulum mauris interdum in. Proin accumsan tempor facilisis. Nulla faucibus, eros in scelerisque pharetra, turpis urna condimentum mauris, ac egestas metus sem a massa.</p>
                                <Link to={name = 'Norsk'} className='homer'><p>klik for å les mer</p></Link>
                            </Link>    
                        </div>
                    <div className='airbox'>
                        <p className='air'>mlemmlemmlem</p>
                    </div>
                </div>
               
             
            </div>


        </div>
    )
}