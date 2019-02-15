import React, { Component } from 'react';
import styled from 'styled-components'
import ScrollAnimation from 'react-animate-on-scroll';

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
                    <ScrollAnimation animateIn="bounceInLeft" animateOut="fadeOut">
                        <h1>I'll be honest.</h1>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="bounceInRight" animateOut="fadeOut">
                        <h1>I'm not a huge fan of this holiday.</h1>
                    </ScrollAnimation>
                </TextContent>
            </FlexContainer>
        );
    }
}

export default Valentine;