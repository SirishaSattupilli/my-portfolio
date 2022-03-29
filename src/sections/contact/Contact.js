import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import { FaEnvelope, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'

import "./Contact.css"

const Contact = () => {
    return (
        <div id="contact">
            <h1 className="pt-3 pb-3 text-center font-details">Contact Me</h1>
            <Jumbotron className="jumbotron-main">
                <Row className="d-flex justify-content-center">
                    {/* <Col className="d-flex justify-content-center"> */}
                        <div className="m-2">
                            <a href="mailto:sattupillisirisha53@gmail.com" target="_blank" rel="noreferrer">
                                <Button variant="outline-danger" title="sattupillisirisha53@gmail.com">< FaEnvelope /> Email</Button></a>
                        </div>
                        <div className="m-2">
                            <a href="https://github.com/SirishaSattupilli" target="_blank" rel="noreferrer">
                                <Button variant="outline-dark">< FaGithub /> Github</Button></a>
                        </div>
                        <div className="m-2">
                            <a href="https://www.linkedin.com/in/sirisha-sattupilli-250a0188/" target="_blank" rel="noreferrer">
                                <Button variant="outline-primary">< FaLinkedin /> LinkedIn</Button></a>
                        </div>
                        <div className="m-2">
                            <a href="https://www.facebook.com/sirisha.sattupilli/" target="_blank" rel="noreferrer">
                                <Button variant="outline-info">< FaFacebook /> Facebook</Button></a>
                        </div>
                    {/* </Col> */}
                </Row>
            </Jumbotron>

        </div>
    )
}

export default Contact
