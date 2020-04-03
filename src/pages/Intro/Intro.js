import React from 'react'
import { Link } from 'react-router-dom'
import { Content, PageTitle, WelcomeTitle, IntroText, Button, ChuckJokesLogo } from './Intro.style'

export default () => (
  <Content>
    <ChuckJokesLogo />
    <WelcomeTitle>Wellcome to</WelcomeTitle>
    <PageTitle>Chuck Jokes</PageTitle>
    <IntroText>You can choose: A Joke, a Round House Kick or both.</IntroText>
    <Link to="/categories">
      <Button>Kick in some jokes</Button>
    </Link>
  </Content>
)
