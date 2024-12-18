import Container from 'react-bootstrap/Container';

function Footer() {
    return(
        <footer fixed="bottom">
            <div className="social container">
                <img />
                <div className="social-links">
                    <ul>
                        <li>Resume</li>
                        <li>
                            <a href='https://www.linkedin.com/in/iannarcissecousar/' target='_blank'>
                                LinkedIN
                            </a>        
                        </li>
                        <li>
                            <a href='https://www.github.com/salambolog/' target='_blank'>    
                                Github
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
export default Footer