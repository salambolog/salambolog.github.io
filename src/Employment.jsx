import CardsTwo from "./CardsTwo"
import Scroll from "./Scroll"
import longBlue from './assets/images/long-blue.png'
import pink from "./assets/images/pink-bundle.png"

function Employment() {
    return(
        <section className="section employ" id="where">
            <div className="employment">
                <Scroll />
            </div>
            <div id="employz">
                <div className="card-container">
                    <img src={pink} alt="" className="long-blue" />
                    <h2 className='position-title'>Work History</h2>
                    <CardsTwo />
                </div>
            </div>
        </section>
    )
}
export default Employment