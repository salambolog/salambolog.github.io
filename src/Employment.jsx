import CardsTwo from "./CardsTwo"
import Scroll from "./Scroll"

function Employment() {
    return(
        <section className="section employ" id="where">
            <div className="employment">
                <Scroll />
            </div>
            <div className="container">
                <h2 className='position-title'>Previous Positions</h2>
            </div>
            <div className="card-container">
                <CardsTwo />
            </div>
        </section>
    )
}
export default Employment