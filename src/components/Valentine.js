import React, { Component } from 'react';
import styled from 'styled-components'

const FlexContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  background: pink;
`
const TextContent = styled.div`
    margin: auto;
    width: 100vw;
    height: 100vh;
    border: 1px solid pink;
    padding: 20px 40px;
    background: pink;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

class Valentine extends Component {
    render() {
        return (
            <FlexContainer>
                <TextContent>
                    <h1>I'm glad that you're my valentine.</h1>
                    <h1>And that you're mine.</h1>
                </TextContent>
            </FlexContainer>
        );
    }
}

export default Valentine;