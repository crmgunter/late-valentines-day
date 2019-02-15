import React, { Component } from 'react';
import styled from 'styled-components'
import ScrollAnimation from 'react-animate-on-scroll';


const FlexContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
`

const TextContent = styled.div`
    margin: auto;
    width: 100vw;
    color: pink;
    padding: 20px 40px;
    background: #222;
    text-align: center;

    h1 {
        font-size: 60px;
    }

    h3 {
        font-size: 40px;
    }
`

class Greeting extends Component {
    render() {
        return (
            <FlexContainer>

                <TextContent>
                    <ScrollAnimation animateIn="bounceInLeft" animateOut="fadeOut">
                        <h1>Hi, Syd.</h1>
                        <h3>Happy Valentine's Day</h3>
                    </ScrollAnimation>
                </TextContent>
            </FlexContainer>
        );
    }
}

export default Greeting;