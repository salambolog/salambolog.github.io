import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

function Cards(props) {
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
    }
    const [fullscreen, setFullscreen] = useState(true);

    const images = [
        'src/assets/images/logos/imeg.webp',
        'src/assets/images/logos/sharecare.png',
        'src/assets/images/logos/cdc.png',
        'src/assets/images/logos/WebMD_small.svg',
        'src/assets/images/logos/capgemini.svg',
        'src/assets/images/logos/sagepath.svg',
        'src/assets/images/logos/nba.png',
    ]
    
    const employerInfos = [{
        employer: "IMEG",
        image: "src/assets/images/logos/imeg.webp",
        description: "Built, edited, designed, and maintained the front end of their current internal/external sites. Fixed slow load times on all platforms.",
        employerLink: "#",
        title: "Front End Dev",
        used: "HTML CSS Javascript Jquery VueJS Wordpress WP Engine Shopify",
        projects: ["PharmaNutra", "Big A** Cabins", "Dolly Parton Stampede", "Aim for Wellbeing", "Cherokee Lodge Condos", "Cook's Pharmacy", "Palm Breeze Luxury RV Resort", "Lakeland Drugs"]
    }, {
        employer: "Sharecare",
        image: "src/assets/images/logos/sharecare_small.svg",
        description: "Built, edited, designed, and maintained the front end of their current internal external sites.",
        employerLink: "#",
        title: "UI Developer",
        used: "HTML CSS Javascript Jquery PHP Wordpress WP Engine",
        projects: ["Sharecare"]
    }, {
        employer: "CDC",
        image: "src/assets/images/logos/cdc.png",
        description: "Built, edited, designed, and maintained the front end of their current internal external sites.",
        employerLink: "#",
        title: "Front End Dev",
        used: "HTML CSS Javascript Jquery JSP Bootstrap Eclipse",
        projects: ["CDC Stacks", "NOAA"]
    }, {
        employer: "WebMD",
        image: "src/assets/images/logos/WebMD_small.svg",
        description: "Using their CMS I created over 45 sites for sponsored content.",
        employerLink: "#",
        title: "UI Developer",
        used: "HTML CSS SCSS Javascript Jquery NodeJS Pagebuilder Grunt Webpack",
        projects: ["WebMD", "Gerber"]
    }, {
        employer: "Capgemini",
        image: "src/assets/images/logos/capgemini.svg",
        description: "N.D.A. (Non-Disclosure Agreement).",
        employerLink: "#",
        title: "Front End Dev",
        used: "HTML CSS SCSS Javascript Jquery Cheerio.JS Moovweb",
        projects: ["Capgemini", "NDA"]
    }, {
        employer: "Sagepath Reply",
        image: "src/assets/images/logos/sagepath.svg",
        description: "With the help of the UX and UI teams I created sites for Shaw Flooring, Home Depot, World of Coca-Cola, Napa AutoCare, R.J. Reynolds, and Georgia Power.",
        employerLink: "#",
        title: "UI Developer",
        used: "AEM HTML SCSS Jquery NodeJS PHP Wordpress Visual Studio",
        projects: [
            {
                projectName: "Shaw Flooring",
                projectURL: "https://shawfloors.com/",
                projectImage: "src/assets/images/logos/shaw.jpeg"
            }, {
                projectName: "Home Depot",
                projectURL: "https://www.homedepot.com/",
                projectImage: "src/assets/images/logos/THD_logo.jpg"
            }, {
                projectName: "World of Coca-Cola",
                projectURL: "https://www.worldofcoca-cola.com/",
                projectImage: "src/assets/images/logos/Coke.png"

            }, {
                projectName: "Napa AutoCare",
                projectURL: "https://www.napaonline.com/en/auto-care",
                projectImage: "src/assets/images/logos/NAPA.svg"

            }, {
                projectName: "R.J. Reynolds",
                projectURL: "https://rjrt.com/",
                projectImage: "src/assets/images/logos/rjrt-logo.svg"

            }, {
                projectName: "Georgia Power",
                projectURL: "https://www.georgiapower.com/",
                projectImage: "src/assets/images/logos/gp.png"

            }
        ]
    }, {
        employer: "Turner NBATV",
        image: "src/assets/images/logos/turner.png",
        description: "With VB.Net, HTML, CSS, Javascript, Razor, SQL,  and Adobe Creative Suites I created a live scoreboard app for Shaq.",
        employerLink: "#",
        title: "UI Software Developer",
        used: "VB.NET HTML CSS Jquery SQL Visual Studio",
        projects: ["Swish"]
    }, {
        employer: "The Creative Group",
        image: "src/assets/images/logos/creative.svg",
        description: "HTML, CSS, Javascript, Wix and Squarespace I created 3 sites for local businesses.",
        employerLink: "#",
        title: "Frontend Developer/Designer",
        used: "HTML CSS Javascript Jquery Wix Squarespace",
        projects: [
            {
                projectName: "Bloomsbury Farms",
                projectURL: "https://bloomsburyfarms.com/",
                projectImage: "src/assets/images/logos/bloomsbury-mtTDLEpp.webp"
            }, 
            {
                projectName: "Revel Realty",
                projectURL: "http://www.revel.company/",
                projectImage: "src/assets/images/logos/revel.gif"
            }
        ]
    }]
    const [myMap, setMyMap] = useState(new Map());
    
    return (
        <>
            <div className="card-container">
                {/* <h2 className='position-title'>Previous Positions</h2> */}
            {employerInfos.map((employerInfo) => (                
                <span>
                    <div className="card" id={employerInfo.employer} >
                        <div className="logo-section">
                            {/* <img src={employerInfo.image}/> */}
                            <p className="logo-text">
                                {employerInfo.employer}
                                <br />
                                {employerInfo.title}
                            </p>
                        </div>
                        <div className="card-body">
                            <p>
                                {employerInfo.description}
                            </p>
                        </div>
                        <div className="card-footer">
                            <a className='button-link'>
                                <Button className="learn-more" variant="primary" onClick={handleShow}>
                                    Specifics
                                </Button>
                            </a>
                        </div>
                    </div>
                    <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                        <Modal.Header closeButton>
                            <Modal.Title>{employerInfo.employer}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className='modal-title-contain'>
                                <img className='modal-brand' src={employerInfo.image}/>
                                <p className='logo-text'>
                                    {employerInfo.title}
                                </p>
                            </div>
                            <p>
                                {employerInfo.description}
                            </p>
                            <h4>
                                {employerInfo.used}
                            </h4>
                        </Modal.Body>
                    </Modal>
                </span>
            ))}
            </div>
        </>
    )
}
export default Cards