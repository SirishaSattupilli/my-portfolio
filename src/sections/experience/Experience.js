import React from 'react'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Card from 'react-bootstrap/Card'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Tilt from 'react-tilt'

import Capgemini from "../../assets/experience/Capgemini_logo.png"
import Virtusa from "../../assets/experience/Virtusa_logo.png"

import "./Experience.css"

const Experience = () => {
    return (
        <div id="experience">
            <h1 className="pt-3 pb-3 text-center font-details">Experience</h1>
            <Tilt className="Tilt" options={{ max: 25 }} >
                <Jumbotron fluid className="jumbo-style">
                  <Container>
                        {/* <Card className="ml-5 mr-5">
                        <Card.Body> */}
                            <Tabs justify defaultActiveKey="capgemini" id="uncontrolled-tab-example" className="tab-title">
                                <Tab eventKey="capgemini" title={<img className="img-size" src={Capgemini} alt="Capgemini" />} >
                                        <Card.Text className="pt-5 text-center font-details-card">
                                            <strong>Designation</strong>: Consultant.
                                            <br />
                                            <strong>Role</strong>: Development Engineer.
                                            <br />
                                            <strong>Duration</strong>: 2015 - 2020.
                                            <p className="pt-3">
                                            <ul className="text-left">
                                                <li><b>Developed</b> well-organised, optimised &amp; interactive forms for the bank's UI.</li>
                                                <li><b>Lead</b> a team for the successful migration of legacy forms(technically) to Backbase forms within the timeline.</li>
                                                <li><b>Contributed</b> to the technical documentation for the new and existing forms.</li>
                                                <li><b>Optimised</b> the code coverage for the existing code by adding in unit test cases.</li>
                                            </ul>
                                            </p>
                                        </Card.Text>
                                </Tab>
                                <Tab eventKey="virtusa" title={<img className="img-size" src={Virtusa} alt="Virtusa" />} >
                                <Card.Text className="pt-5 text-center font-details-card">
                                            <strong>Designation</strong>: Engineer.
                                            <br />
                                            <strong>Role</strong>: UI Developer.
                                            <br />
                                            <strong>Duration</strong>: 2013 - 2015.
                                            <p className="pt-3">
                                            <ul className="text-left">
                                                <li><b>Developed</b> UI components for the homepage of client's website.</li>
                                                <li><b>Enhanced</b> existing components as per the given latest specs.</li>
                                                <li><b>Provided</b> post deployment support for enhancement on the production environment based on releases.</li>
                                                <li><b>Learned</b> and improved skills continuously.</li>
                                            </ul>
                                            </p>
                                        </Card.Text>
                                </Tab>
                            </Tabs>
                            {/* </Card.Body>
                        </Card> */}
                    </Container>
                </Jumbotron>
            </Tilt>
        </div>

    )
}

export default Experience
