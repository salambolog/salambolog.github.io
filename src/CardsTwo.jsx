import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import Imeg from "./assets/images/logos/imeg.webp";
import Sharecare from "./assets/images/logos/sharecare_small.svg";
import CDC from "./assets/images/logos/cdc.png";
import WebMD from "./assets/images/WebMD_small.svg";
import Cap from "./assets/images/capgemini.svg";
import Sagepath from "./assets/images/sagepath.svg";
import Turner from "./assets/images/turner.png";
import Circle from "./assets/images/creative.svg";

const EmployerCard = ({ employer, onSelect }) => {
    const [modal, setModal] = useState(false);
    const toggleModal = () => {
      setModal(!modal);
    };
    return (
        <div className="turboCard">
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
                        <ul>
                            {employer.details.map((detail) => 
                                <li>{detail}</li>
                            )}
                        </ul>
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
        image: Imeg,
        description: "Built, edited, designed, and maintained the front end of their current internal/external sites. Fixed slow load times on all platforms.",
        details: ["Created templates/sites via Figma using HTML / Pug / SCSS / Stylus / Vuejs / React/ PHP / Wordpress / Liquid / Shopify", "Created Vue/React components and functionality for all sites: including maps, dropdowns, carousels, buttons, “Rezemotion” api data and more." , "Optimized HTML/CSS/Stylus Code for speed to reduce FCP,LCP,TBT, and CLS using Lighthouse/Webpagetest.", "Fixed image optimization and graphics using Adobe Creative Suite to fix responsiveness and response time of several sites.", "Used Semrush to search for broken links and created backlinks."],
        employerLink: "#",
        title: "Front End Dev",
        used: "HTML / CSS / Javascript / Jquery / VueJS / Wordpress / WP Engine / Shopify",
        projURLs: ["https://pharmanutra-us.com/products/sideral-folic", "https://bigasscabins.com/", "https://dpstampede.com/", "https://aimforwellbeing.org/", "https://www.cherokeelodgecondos.com/", "https://cookspharmacy.com/", "https://palmbreezeresort.com/", "https://lakelanddrug.com/"],
        projects: ["PharmaNutra", "Big A** Cabins", "Dolly Parton Stampede", "Aim for Wellbeing", "Cherokee Lodge Condos", "Cook's Pharmacy", "Palm Breeze Luxury RV Resort", "Lakeland Drugs"],
    }, {
        employer: "Sharecare",
        image: Sharecare,
        description: "Built, edited, designed, and maintained the front end of their current internal external sites.",
        details: ["Created templates/sites via Figma using HTML / React / CSS / PHP / Wordpress / WP Engine", "Created secure, performant, and flexible client facing experiences to enhance overall speed and ease of use." , "Updated, edited, and maintained react routes for new pages and redirects.", "A/B tested several pages using Google Optimize, Lighthouse, and Analytics. Editing to increase site rank on searches using competitive keywords.", "Created variants of pages and changed code classes and styles in Optimize to appeal to all audiences."],
        employerLink: "#",
        title: "UI Developer",
        used: "HTML / CSS / Javascript / Jquery / PHP / Wordpress / WP Engine",
        projURLs: ["https://www.sharecare.com"],
        projects: ["Sharecare"]
    }, {
        employer: "CDC",
        image: CDC,
        description: "Built, edited, designed, and maintained the front end of their current internal external sites.",
        details: ["Redesigned Stacks sites via Figma using HTML/CSS/PHP/Drupal", "Created secure, performant, and flexible client facing experiences to enhance overall speed and ease of use." , "A/B tested Stacks sites using Google Optimize: created alternate headings, buttons, and footers.", "Set google trackers and assigned them to buttons and anchor tags."],
        employerLink: "#",
        title: "Front End Dev",
        used: "HTML / CSS / Javascript / Jquery / JSP / Bootstrap / Eclipse",
        projURLs: ["https://www.cdc.gov", "https://stacks.cdc.gov/", "https://www.noaa.gov/"],
        projects: ["CDC", "CDC Stacks", "NOAA"]
    }, {
        employer: "WebMD",
        image: WebMD,
        description: "Using their CMS I created over 45 sites for sponsored content.",
        details: ["Created templates/sites via Figma using HTML/React/SCSS/Javascript/Jquery including sponsored pages for Gerber.", "Created secure, performant, and flexible client facing experiences to enhance overall speed and ease of use.", "Using Google Optimize, Lighthouse, and Analytics I used heatmaps to track user behavior which would then inform the design of our pages. Click patterns, mouse overs, and scrolling increased the usage for conversion rates.", "Changed components for synthetic audience testing for search algorithms."],
        employerLink: "#",
        title: "UI Developer",
        used: "HTML / CSS / SCSS / Javascript / Jquery / NodeJS / Pagebuilder / Grunt / Webpack",
        projURLs: ["https://www.webmd.com/"],
        projects: ["WebMD"]
    }, {
        employer: "Capgemini",
        image: Cap,
        description: "N.D.A. (Non-Disclosure Agreement).",
        details: ["Rebuilding of a service using HTML, CSS, Javascript, Jquery, Moovweb, Cheerio.JS"],
        employerLink: "#",
        title: "Front End Dev",
        used: "HTML / CSS / SCSS / Javascript / Jquery / Cheerio.JS / Moovweb",
        projURLs: ["https://capgemini.com/"],
        projects: ["Capgemini", "NDA"]
    }, {
        employer: "Sagepath Reply",
        image: Sagepath,
        description: "With the help of the UX and UI teams I created sites for Shaw Flooring, Home Depot, World of Coca-Cola, Napa AutoCare, R.J. Reynolds, and Georgia Power.",
        details: ["Created templates/sites via Sketch/Adobe XD using HTML / React / SCSS / Javascript / Jquery / PHP / Wordpress / Instapage", "Debugged several pages to ensure usability. Used competitive keywords to optimize search ranking.", "Working with our SEO specialist, changed headlines, anchor tags, class names and page position to push user experience on all sites."],
        employerLink: "#",
        title: "UI Developer",
        used: "AEM / HTML / SCSS / Jquery / NodeJS / PHP / Wordpress / Visual Studio",
        projects: ["Shaw Flooring", "Home Depot", "World of Coca-Cola", "Napa AutoCare", "R.J. Reynolds", "Georgia Power"],
        projURLs: ["https://shawfloors.com/","https://www.homedepot.com/", "https://www.worldofcoca-cola.com/", "https://www.napaonline.com/en/auto-care", "https://rjrt.com/", "https://www.georgiapower.com/"]
    }, {
        employer: "Turner NBATV",
        image: Turner,
        description: "With VB.Net, HTML, CSS, Javascript, Razor, SQL,  and Adobe Creative Suites I created a live scoreboard app for Shaq.",
        details: ["Used Visual Basic to assist in builing, editing, and maintaing the SWISH application.", "Created and designed user friendly websites and printed materials for the SWISH application.", "Monitored the CPU usage and statuses for SWISH overnight", "Built and designed a tablet based score board application for Shaquille o'Neal to use on air."],
        employerLink: "#",
        title: "UI Software Developer",
        used: "VB.NET / HTML / CSS / Jquery / SQL / Visual Studio",
        projURLs: ["https://www.nba.com"],
        projects: ["Swish"]
    }, {
        employer: "Creative Circle",
        image: Circle,
        description: "My first foray into professional web development. By request I created 3 sites for local and international businesses.",
        details: ["Using HTML / CSS / Javascript / Jquery / Wix and Squarespace I crafted 3 sites for clients via Creative Circle.", "Used media queries to build out mobile responsiveness.", "Used Javascript to create button functionality."],
        employerLink: "#",
        title: "Frontend Developer/Designer",
        used: "HTML / CSS / Javascript / Jquery / Wix / Squarespace",
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