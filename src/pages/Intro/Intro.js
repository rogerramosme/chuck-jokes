import React from 'react'
import { Content, PageTitle, WelcomeTitle, IntroText, Button, ChuckJokesLogo } from './Intro.style'

export default () => (
  <Content>
    <ChuckJokesLogo />
    <WelcomeTitle>Wellcome to</WelcomeTitle>
    <PageTitle>Chuck Jokes</PageTitle>
    <IntroText>You can choose: A Joke, a Round House Kick or both.</IntroText>
    <Button to="/categories">Kick in some jokes</Button>
  </Content>
)
