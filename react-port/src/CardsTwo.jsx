import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const EmployerCard = ({ employer, onSelect }) => {
    const [modal, setModal] = useState(false);
  
    const toggleModal = () => {
      setModal(!modal);
    };
  
    return (
        <div>
            <div className="employer-card card" onClick={(e) => { e.stopPropagation(); toggleModal() }}>
                <div className="logo-section">
                    <p className="logo-text">
                        {employer.employer}
                        <br />
                        {employer.title}
                    </p>
                </div>
                <div className="card-body">
                    <p>
                        {employer.description}
                    </p>
                </div>
                <div className="card-footer">
                    <Button className="learn-more" onClick={toggleModal}>
                        Specifics
                    </Button>
                </div>
            </div>
            {modal && (
                <Modal show={modal} onHide={toggleModal} fullscreen={true}>
                    <Modal.Header closeButton>
                        <Modal.Title>{employer.employer}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='modal-title-contain'>
                            <img className='modal-brand' id={employer.employer} src={employer.image}/>
                            <p className='logo-text'>
                                {employer.title}
                            </p>
                        </div>
                        <h4>
                            {employer.description}
                        </h4>
                        <p>
                            {employer.used}
                        </p>
                        <div className='projects'>
                            <div>
                                {employer.projects.map(
                                    project => 
                                    <p> {project} </p>
                                    )
                                }
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
            )}
        </div>

    );
  };
  
const Employers = () => {
  const employers = [
    {
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
        projects: ["Shaw Flooring", "Home Depot", "World of Coca-Cola", "Napa AutoCare", "R.J.", "Reynolds", "Georgia Power"],
        projectObj: [
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
        description: "My first foray into professional web development. By request I created 3 sites for local and international businesses.",
        employerLink: "#",
        title: "Frontend Developer/Designer",
        used: "HTML CSS Javascript Jquery Wix Squarespace",
        projects: ["Bloomsberry Farms", "Revel Realty", "Sarah Winword"],
        projectObj: [
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
    }
  ];

  return (
    <>
      {employers.map((employer) => (
        <EmployerCard key={employer.id} employer={employer} />
      ))}
    </>
  );
};

export default Employers;