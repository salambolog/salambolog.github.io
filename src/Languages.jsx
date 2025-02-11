
import html from './assets/images/logos/HTML.svg'
import css from './assets/images/logos/CSS.png'
import js from './assets/images/logos/JS.svg'
import jquery from './assets/images/logos/JQuery.png'
import git from './assets/images/logos/Git.png'
import reactimg from './assets/images/logos/react.png'
import php from './assets/images/logos/PHP.svg'
import wp from './assets/images/logos/WP.png'
function Languages() {
    return (
        <section className="languages" id="languages">
            <div className='container'>
                <div className='intro'>    
                    <p className='body-text'>Languages & Libraries</p>
                </div>
                <div className="grid">
                    <img src={html}></img>
                    <img src={css}></img>
                    <img src={js}></img>
                    <img src={jquery}></img>
                    <img src={reactimg}></img>
                    <img src={git}></img>
                    <img src={php}></img>
                    <img src={wp}></img>
                </div>
            </div>
        </section>
    )
}

export default Languages;