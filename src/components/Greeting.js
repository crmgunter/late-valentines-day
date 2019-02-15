import React, { Component } from 'react';
import styled from 'styled-components'

const FlexContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
`

const TextContent = styled.div`
    margin: auto;
    width: 100vw;
    border: 1px solid pink;
    /* border-radius: 10px; */
    padding: 20px 40px;
    background: pink;
    text-align: center;
`

class Greeting extends Component {
    render() {
        return (
            <FlexContainer>
                <TextContent>
                    <h1>Hi, Syd.</h1>
                    <h3>Happy Valentine's Day</h3>
                </TextContent>
            </FlexContainer>
        );
    }
}

export default Greeting;