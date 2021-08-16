import React from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

/**Skills logo images */
import LogoHtml from "../../assets/skills/HTML5_logo.png"
import LogoCss from "../../assets/skills/CSS3_logo.png"
import LogoJs from "../../assets/skills/JavaScript_logo.png"
import LogoBootstrap from "../../assets/skills/Bootstrap_logo.png"
import LogoReact from "../../assets/skills/React_logo.png"
import LogoReactRouter from "../../assets/skills/ReactRouter_logo.png"
import LogoReactBootstrap from "../../assets/skills/ReactBootstrap_logo.png"
import LogoStyledComponents from "../../assets/skills/StyledComponents_logo.png"
import LogoGit from "../../assets/skills/Git_logo.png"
import LogoGitHubPages from "../../assets/skills/GitHubPages_logo.png"
import LogoJasmine from "../../assets/skills/Jasmine_logo.png"
import LogoBackbase from "../../assets/skills/Backbase_logo.png"

import "./Skills.css"


const Skills = () => {
    return (
        <div id="skills">
            <h1 className="pt-3 pb-3 text-center font-details">Tech Skills</h1>
            
                <Row className="">
                    <Col md={4}>
                        <Card className="focus">
                            <Card.Body>
                                <ListGroup variant="flush">
                                    <ListGroup.Item><Image src={LogoHtml} rounded className="imagesize font-details-skills" /> HTML5</ListGroup.Item>
                                    <ListGroup.Item><Image src={LogoCss} rounded className="imagesize font-details-skills" /> CSS3</ListGroup.Item>
                                    <ListGroup.Item><Image src={LogoJs} rounded className="imagesize font-details-skills" /> JavaScript</ListGroup.Item>
                                    <ListGroup.Item><Image src={LogoBootstrap} rounded className="imagesize font-details-skills" /> Bootstap</ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="focus">
                            <Card.Body>
                                <ListGroup variant="flush">
                                    <ListGroup.Item><Image src={LogoReact} rounded className="imagesize font-details-skills" /> React</ListGroup.Item>
                                    <ListGroup.Item><Image src={LogoReactRouter} rounded className="imagesize font-details-skills" /> React Router</ListGroup.Item>
                                    <ListGroup.Item><Image src={LogoReactBootstrap} rounded className="imagesize font-details-skills" /> React Bootstrap</ListGroup.Item>
                                    <ListGroup.Item><Image src={LogoStyledComponents} rounded className="imagesize font-details-skills" /> StyledComponents</ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="focus">
                            <Card.Body>
                            <ListGroup variant="flush">
                                    <ListGroup.Item><Image src={LogoGit} rounded className="imagesize font-details-skills" /> Git</ListGroup.Item>
                                    <ListGroup.Item><Image src={LogoGitHubPages} rounded className="imagesize font-details-skills" /> Github Pages</ListGroup.Item>
                                    <ListGroup.Item><Image src={LogoJasmine} rounded className="imagesize font-details-skills" /> Jasmine</ListGroup.Item>
                                    <ListGroup.Item><Image src={LogoBackbase} rounded className="imagesize font-details-skills" /> Backbase</ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </Col>
            </Row>
        </div>
    )
}

export default Skills
