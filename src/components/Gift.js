import React, { Component } from 'react';
import styled from 'styled-components'
import { Animated } from "react-animated-css";
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

const GiftImage = styled.div`
    background: url('https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/155/wrapped-present_1f381.png');
    height: 120px;
    width: 120px;
    margin: 0 auto;
`

const OpenedGiftImage = styled.div`
    font-size: 100px;

    p {
        font-size: 24px;
    }
`

class Gift extends Component {
    state = {
        giftOpened: false
    }

    openGift = (event) => {
        event.preventDefault()
        this.setState({ giftOpened: !this.state.giftOpened })
    }

    render() {
        return (
            <FlexContainer>
                <TextContent>
                    <ScrollAnimation animateIn="fadeIn" animateOut="slideOutLeft">
                    <h1>Here's a gift for you</h1>
                    </ScrollAnimation>
                    {this.state.giftOpened ? (
                        <ScrollAnimation animateIn="zoomIn" animateOut="slideOutRight">
                            <OpenedGiftImage><span role="img" aria-label="heart">❤️<br /><p>(It's my heart)</p></span></OpenedGiftImage>
                        </ScrollAnimation>
                    ) : <div>
                            <ScrollAnimation animateIn="slideInLeft" animateOut="slideOutRight">
                                <GiftImage onClick={this.openGift}></GiftImage>
                                <p>Click me!</p>
                            </ScrollAnimation>
                        </div>}
                </TextContent>
            </FlexContainer>
        );
    }
}

export default Gift;