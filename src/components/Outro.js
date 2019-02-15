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

class Outro extends Component {
    render() {
        return (
            <FlexContainer>
                <TextContent>
                    <ScrollAnimation animateIn="slideInLeft">
                        <h1>Happy Valentines Day!</h1>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="slideInRight">
                        <h1>I'm glad that you're mine.</h1>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeIn">
                        <h1><span role="img" aria-label="heart">❤️<br /></span>Cam</h1>
                    </ScrollAnimation>
                </TextContent>
            </FlexContainer>
        );
    }
}

export default Outro;