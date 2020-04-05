import React from 'react'
import { useParams } from 'react-router'
import Navigation from 'components/Navigation'
import { Wrapper, JokeWrapper, Joke, Button } from './Joke.style'

export default () => {
  const { category } = useParams()
  const joke =
    'Chuck Norris has volunteered to remain on earth after the Rapture; he will spend his time fighting the Anti-Christ.'

  return (
    <Wrapper>
      <Navigation category={category} />
      <JokeWrapper>
        <Joke>{joke}</Joke>
        <Button outline>Roll another</Button>
      </JokeWrapper>
    </Wrapper>
  )
}
