import React, { Component } from 'react';
import styled from 'styled-components'
import { Animated } from "react-animated-css";


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
                    <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
                        <h1>Hi, Syd.</h1>
                        <h3>Happy Valentine's Day</h3>
                    </Animated>
                </TextContent>
            </FlexContainer>
        );
    }
}

export default Greeting;