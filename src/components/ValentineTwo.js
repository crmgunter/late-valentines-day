import React, { Component } from 'react';
import styled from 'styled-components'
import ScrollAnimation from 'react-animate-on-scroll';

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
`

class ValentineTwo extends Component {
    render() {
        return (
            <div>
                <FlexContainer>
                    <TextContent>
                        <ScrollAnimation animateIn="pulse">
                            <h1>But I'm a huge fan of you!</h1>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeIn">
                            <h1>And I'm glad that you're my valentine.</h1>
                        </ScrollAnimation>
                    </TextContent>
                </FlexContainer>
            </div>
        );
    }
}

export default ValentineTwo;