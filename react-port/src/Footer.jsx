import React, { useState } from 'react';
import pdf from './assets/docs/IanResume.pdf';
import { Modal } from 'react-bootstrap';
import { Document, Page } from 'react-pdf';

function Footer() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return(
        <footer fixed="bottom">
            <div className="social container">
                <img />
            {/* <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>PDF Preview</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Document file={pdf}>
                        <Page pageNumber={1} />
                    </Document>
                </Modal.Body>
                <Modal.Footer>
                    <button onClick={handleClose}>Close</button>
                </Modal.Footer>
            </Modal> */}
                <div className="social-links">
                    <ul>
                        {/* <li>
                            <a onClick={handleShow}>Resume</a>
                        </li> */}
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