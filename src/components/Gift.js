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
                    <h1>Here's a gift for you</h1>
                    {this.state.giftOpened ? (
                        <ScrollAnimation animateIn="zoomIn" animateOut="fadeOut" duration={2}>
                            <OpenedGiftImage><span role="img" aria-label="heart">❤️<br/><p>(It's my heart)</p></span></OpenedGiftImage>
                        </ScrollAnimation>
                    ) : <GiftImage onClick={this.openGift}></GiftImage>}

                    {/* console.log("Here's a little bit of programming trivia. Did you know that in Javascript, when you try to divide a number by 0, Javascript returns 'Infinity'? So if I wrote something like 'console.log(`On a scale of 1-10, I like you ${1/0}/10`), it would return... well, click the button.")
                    console.log(`\nOn a scale of 1-10, I like you ${1/0}/10!`)
                    console.log('\nOr as you like to say, 20/10') */}

                </TextContent>
            </FlexContainer>
        );
    }
}

export default Gift;