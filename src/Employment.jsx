import CardsTwo from "./CardsTwo"
import Scroll from "./Scroll"

function Employment() {
    return(
        <section className="section employ" id="where">
            <div className="employment">
                <Scroll />
            </div>
            <div id="employz">
                <div className="card-container">
                    <h2 className='position-title'>Work History</h2>
                    <CardsTwo />
                </div>
            </div>
        </section>
    )
}
export default Employment