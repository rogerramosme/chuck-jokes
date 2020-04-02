import React from 'react'
import { Wrapper, ChuckJokesLogo, PageTitle, WelcomeTitle, IntroText, Button } from './Intro.style'
import logo from 'assets/chuck-jokes-logo.png'

export default () => (
  <Wrapper>
    <ChuckJokesLogo src={logo} alt="Chuck Jokes Logo" />
    <WelcomeTitle>Wellcome to</WelcomeTitle>
    <PageTitle>Chuck Jokes</PageTitle>
    <IntroText>You can choose: A Joke, a Round House Kick or both.</IntroText>
    <Button>Kick in some jokes</Button>
  </Wrapper>
)
