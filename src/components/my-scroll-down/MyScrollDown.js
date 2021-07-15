import React from 'react'
import styled from 'styled-components'

const ScrollDown = styled.div`
position: relative;
z-index: 1;
bottom: 1.6em;
width: 100%;
justify-content: center;
display: flex;
color: #fff;
font-weight: bold;
text-shadow: 1px 1px #45a29e;

.turn{
    cursor: pointer;
    transform: rotate(90deg);
}
`;

const MyScrollDown = () => {
    return (
        <ScrollDown>
            <div className="turn">
                <span> &gt; </span>
            </div>
        </ScrollDown>

    )
}

export default MyScrollDown
