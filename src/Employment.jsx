import CardsTwo from "./CardsTwo"
import Scroll from "./Scroll"

function Employment() {
    return(
        <section className="section employ" id="where">
            <div className="employment">
                <Scroll />
            </div>
            <div id="employz">
                <h2 className='position-title'>Work History</h2>
                <div className="card-container">
                    <CardsTwo />
                </div>
            </div>
        </section>
    )
}
export default Employment