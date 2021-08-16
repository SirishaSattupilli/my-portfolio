import React, { useState, useEffect } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Logo from '../../assets/logo.png'
import styled from 'styled-components'
import '../my-navbar/MyNavBar.css';

const Transition = styled.div`
.active{
    visibility: visible;
    transition: all 200ms ease-in;
}
.hidden{
    visibility: hidden;
    transition: all 200ms ease-out;
    transform: translate(0, -100%);
}
`;

const MyNavBar = () => {
    const[showNavBar, setShowNavBar] = useState(true);
    const[scrollPos, setScrollPos] = useState(0);

    const handleScroll = () => {
        setScrollPos(document.body.getBoundingClientRect().top);
        setShowNavBar(document.body.getBoundingClientRect().top > scrollPos);
    };

    let navDisplay = showNavBar ? "active" : "hidden";

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    });

    return (
        <Transition>
            <Navbar fixed='top' expand="md" variant="dark" className={`animate-navbar nav-theme ${navDisplay}`}>
                <Navbar.Brand href="#home">{<img src={Logo} alt="My Logo" className="logo" />}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#skills">Skills</Nav.Link>
                            <Nav.Link href="#experience">Experience</Nav.Link>
                            <Nav.Link href="#projects">Projects</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
        </Transition>
    )
}

export default MyNavBar
