import React from 'react'
import { Timeline, Events, UrlButton, ImageEvent } from '@merc/react-timeline';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Image from 'react-bootstrap/Image'
import ReactTaskTracker from '../../assets/projects-timeline/ReactTaskTracker.png'

import "./ProjectTimeline.css"

/**Skills logo images */
import LogoHtml from "../../assets/skills/HTML5_logo.png"
import LogoCss from "../../assets/skills/CSS3_logo.png"
import LogoReact from "../../assets/skills/React_logo.png"

const ProjectTimeline = () => {
    return (
        <div>
            <div id="projects">
                <h1 className="pt-3 pb-3 text-center font-details">React Side Projects</h1>
                <Timeline>
                    <Events>
                        <ImageEvent
                            date="30/03/2021"
                            className="text-center"
                            text="React Task Tracker"
                            src={ReactTaskTracker}
                            alt="sample image - placeholder"
                        >
                            <div className="mt-1">
                                <div>
                                    <Accordion>
                                        <Card>
                                            <Accordion.Toggle as={Card.Header} eventKey="0" className="accordian text-center p-2" >
                                                Project Details
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="0">
                                                <Card.Body className="text-left">
                                                    <p><strong>Description: </strong>It is a simple react project to add and delete your tasks to your tasklist.</p>
                                                    <hr />
                                                    <p><strong>Features:</strong>
                                                        <ul>
                                                            <li>Keeps track of your tasks.</li>
                                                            <li>Simple and useful.</li>
                                                            <li>Responsive Design.</li>
                                                        </ul>
                                                    </p>
                                                    <hr />
                                                    <p><strong>Tech stack:</strong></p>
                                                    <ListGroup variant="flush">
                                                        <ListGroup.Item><Image src={LogoHtml} rounded className="imagesize font-details-skills" /> HTML5</ListGroup.Item>
                                                        <ListGroup.Item><Image src={LogoCss} rounded className="imagesize font-details-skills" /> CSS3</ListGroup.Item>
                                                        <ListGroup.Item><Image src={LogoReact} rounded className="imagesize font-details-skills" /> React Js</ListGroup.Item>
                                                    </ListGroup></Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    </Accordion>
                                </div>
                                <div className="d-flex justify-content-between text-center">
                                    <UrlButton href="https://sirishasattupilli.github.io/ReactTaskTracker/" target="_blank">
                                        See Live
                                    </UrlButton>
                                    <UrlButton href="https://github.com/SirishaSattupilli/ReactTaskTracker" target="_blank">
                                        Source Code
                                    </UrlButton>
                                </div>
                            </div>
                        </ImageEvent>
                    </Events>
                </Timeline>
            </div>
        </div>
    )
}

export default ProjectTimeline
