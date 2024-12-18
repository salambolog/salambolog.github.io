import imeg from './assets/images/imeg.webp'
import share from './assets/images/sharecare.png'
import cdc from './assets/images/cdc.png'
import webmd from './assets/images/webmd.png'
import cap from './assets/images/capgemini.svg'
import sage from './assets/images/sagepath.svg'
import turner from './assets/images/nba.png'
import cc from './assets/images/creative.svg'
import bbf from './assets/images/bloomsbury.webp'
import coke from './assets/images/Coke.png'
import gp from './assets/images/gp.png'
import napa from './assets/images/NAPA.svg'
import nba from './assets/images/nba.png'
import rj from './assets/images/rjrt-logo.svg'
import shaw from './assets/images/shaw.jpeg'
import hd from './assets/images/THD_logo.jpg'


function Scroll() {
    return (
        <div className="scroll-container">
            <div className="carousel-primary">
                <span>
                    <img src={imeg} alt="imeg logo" />
                </span>
                <span>
                    <img src={share} alt="sharecare logo" />
                </span>
                <span>
                    <img src={cdc} alt="cdc logo" />
                </span>
                <span>
                    <img src={webmd} alt="webmd logo" />
                </span>
                <span>
                    <img src={cap} alt="capgemini logo" />
                </span>
                <span>
                    <img src={sage} alt="sagepath logo" />
                </span>
                <span>
                    <img src={turner} alt="turner logo" />
                </span>
                <span>
                    <img src={cc} alt="creative logo" />
                </span>
                <span>
                    <img src={bbf} alt="bloomsbury logo" />
                </span>
                <span>
                    <img src={coke} alt="coke logo" />
                </span>
                <span>
                    <img src={gp} alt="georgia power logo" />
                </span>
                <span>
                    <img src={napa} alt="NAPA logo" />
                </span>
                <span>
                    <img src={nba} alt="NBA logo" />
                </span>
                <span>
                    <img src={rj} alt="rj logo" />
                </span>
                <span>
                    <img src={shaw} alt="shaw flooring logo" />
                </span>
                <span>
                    <img src={hd} alt="Home Depot logo" />
                </span>
            </div>
        </div>
    )
}

export default Scroll