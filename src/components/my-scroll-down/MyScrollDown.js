import React from 'react'
import styled from 'styled-components'
import Nav from 'react-bootstrap/Nav'

const ScrollDown = styled.div`
position: relative;
z-index: 1000;
bottom: 3em;
width: 100%;
display: flex;
justify-content: center;
background-color: transparent;
font-weight: 800;
text-shadow: 1px 1px #45a29e;
color: #fff;
animation: MoveUpDown 2s linear infinite;
.turn{
    cursor: pointer;
    transform: rotate(90deg);
    color: #fff;
}
@keyframes MoveUpDown{
    0%, 100%{
        bottom: 100px;
    }
    50%{
        bottom: 50px;
    }
}
`;

const MyScrollDown = () => {
    return (
        <ScrollDown>
            <div><Nav.Link href="#about" className="turn" >&gt;</Nav.Link></div>
        </ScrollDown>
    )
}

export default MyScrollDown
