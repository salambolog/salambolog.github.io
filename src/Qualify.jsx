import donut from './assets/images/donut.png'
import hardy from './assets/images/hardy.png'
import ninja from './assets/images/ninja.png'
import sherlock from './assets/images/sherlock.png'
import Languages from './Languages.jsx'

function Qualify() {
    return (
        <>
            <section id="qualify">
                <div  className='container'>
                    <div className='intro'>
                        <p className='body-text'>
                            What makes me right
                            <br /> for the job?
                        </p>
                    </div>
                    <div className="qualify-contain card-container">
                        <div className="employer-card card">
                            <h3>Specialized Experience</h3>
                            <div className='image-cont'>
                                <img src={donut} className="qualify-image"/>
                            </div>
                            <p>Blending the tones of developers and designers into one shade. </p>
                        </div>
                        <div className="employer-card card">
                            <h3>Strong Frontend</h3>
                            <div className='image-cont'>
                                <img src={hardy} className="qualify-image"/>
                            </div>
                            <p>Always pushing into uncomfortable territory and challenges to improve my skills. </p>
                        </div>
                        <div className="employer-card card">
                            <h3>Design and Aesthetic</h3>
                            <div className='image-cont'>
                                <img src={ninja} className="qualify-image"/>
                            </div>
                            <p>Color theory, typography, javascript, and much more. (Plus I know what kerning is!) </p>
                        </div>
                        <div className="employer-card card">
                            <h3>Artistic Background</h3>
                            <div className='image-cont'>
                                <img src={sherlock} className="qualify-image"/>
                            </div>
                            <p>From Atlanta College of Art to Scad to AUM.</p>
                        </div>
                    </div>
                </div>
            </section>
            <Languages />
        </>
    )
}

export default Qualify;