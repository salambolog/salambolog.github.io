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
                                {employer.projects && employer.projects.map((project, index) => (
                                    <a
                                        key={index}
                                        href={employer.projURLs && employer.projURLs[index]}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >
                                        <p>{project}</p>
                                    </a>
                                ))}
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
        projURLs: ["https://pharmanutra-us.com/products/sideral-folic", "https://bigasscabins.com/", "https://dpstampede.com/", "https://aimforwellbeing.org/", "https://www.cherokeelodgecondos.com/", "https://cookspharmacy.com/", "https://palmbreezeresort.com/", "https://lakelanddrug.com/"],
        projects: ["PharmaNutra", "Big A** Cabins", "Dolly Parton Stampede", "Aim for Wellbeing", "Cherokee Lodge Condos", "Cook's Pharmacy", "Palm Breeze Luxury RV Resort", "Lakeland Drugs"],
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
        projURLs: ["www.cdc.gov", "https://stacks.cdc.gov/", "https://www.noaa.gov/"],
        projects: ["CDC", "CDC Stacks", "NOAA"]
    }, {
        employer: "WebMD",
        image: "src/assets/images/logos/WebMD_small.svg",
        description: "Using their CMS I created over 45 sites for sponsored content.",
        employerLink: "#",
        title: "UI Developer",
        used: "HTML CSS SCSS Javascript Jquery NodeJS Pagebuilder Grunt Webpack",
        projURLs: ["https://www.webmd.com/"],
        projects: ["WebMD"]
    }, {
        employer: "Capgemini",
        image: "src/assets/images/logos/capgemini.svg",
        description: "N.D.A. (Non-Disclosure Agreement).",
        employerLink: "#",
        title: "Front End Dev",
        used: "HTML CSS SCSS Javascript Jquery Cheerio.JS Moovweb",
        projURLs: ["https://capgemini.com/"],
        projects: ["Capgemini", "NDA"]
    }, {
        employer: "Sagepath Reply",
        image: "src/assets/images/logos/sagepath.svg",
        description: "With the help of the UX and UI teams I created sites for Shaw Flooring, Home Depot, World of Coca-Cola, Napa AutoCare, R.J. Reynolds, and Georgia Power.",
        employerLink: "#",
        title: "UI Developer",
        used: "AEM HTML SCSS Jquery NodeJS PHP Wordpress Visual Studio",
        projects: ["Shaw Flooring", "Home Depot", "World of Coca-Cola", "Napa AutoCare", "R.J. Reynolds", "Georgia Power"],
        projURLs: ["https://shawfloors.com/","https://www.homedepot.com/", "https://www.worldofcoca-cola.com/", "https://www.napaonline.com/en/auto-care", "https://rjrt.com/", "https://www.georgiapower.com/"]
    }, {
        employer: "Turner NBATV",
        image: "src/assets/images/logos/turner.png",
        description: "With VB.Net, HTML, CSS, Javascript, Razor, SQL,  and Adobe Creative Suites I created a live scoreboard app for Shaq.",
        employerLink: "#",
        title: "UI Software Developer",
        used: "VB.NET HTML CSS Jquery SQL Visual Studio",
        projURLs: ["https://www.nba.com"],
        projects: ["Swish"]
    }, {
        employer: "The Creative Group",
        image: "src/assets/images/logos/creative.svg",
        description: "My first foray into professional web development. By request I created 3 sites for local and international businesses.",
        employerLink: "#",
        title: "Frontend Developer/Designer",
        used: "HTML CSS Javascript Jquery Wix Squarespace",
        projURLs: ["https://bloomsburyfarms.com/", "https://www.revel.company/", "https://sarahwinward.com/"],
        projects: ["Bloomsberry Farms", "Revel Realty", "Sarah Winward"]
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