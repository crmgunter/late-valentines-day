import React, { Component } from 'react';
import styled from 'styled-components'
import ScrollAnimation from 'react-animate-on-scroll';
import { Animated } from "react-animated-css";

const FlexContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  background: #222;
`
const TextContent = styled.div`
    margin: auto;
    width: 100vw;
    height: 100vh;
    padding: 20px 40px;
    color: pink;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-size: 30px;
    
    button {
        background: pink;
        font-family: 'Amatic SC', cursive;
        width: 200px;
        height: 60px;
        font-size: 24px;
        border-radius: 10px;
        margin: 0 auto;
    }
`

const SecretText = styled.div`
    p {
        font-size: 20px;
    }
`

class Trivia extends Component {
    state = {
        buttonClicked: false
    }

    revealSecretText = () => {
        this.setState({ buttonClicked: !this.state.buttonClicked })
    }

    render() {
        return (
            <FlexContainer>
                <TextContent>
                    <div>
                        <p>Here's a little bit of programming trivia.
                         Did you know that in Javascript, when you try to divide a number by 0,
                         Javascript returns 'Infinity'? So if I wrote something like
                         'console.log((1 / 0) / 10),
                         it would return... well, click the button.</p>
                        <button onClick={this.revealSecretText}>Divide by Zero</button>
                    </div>
                    <div>
                        {this.state.buttonClicked ?
                            <SecretText>
                                <Animated animationIn="slideInLeft" animationOut="SlideOutRight">
                                    <p>On a scale of 1-10, I like you {1 / 0}/10!</p>
                                </Animated>
                                <Animated animationIn="slideInRight" animationOut="SlideOutLeft" animationInDelay={1000}>
                                    <p>Or as you like to say, 20/10.</p>
                                </Animated>
                            </SecretText>
                            : null
                        }
                    </div>
                </TextContent>
            </FlexContainer>
        );
    }
}

export default Trivia;