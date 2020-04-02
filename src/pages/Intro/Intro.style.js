import styled from 'styled-components'
import BaseButton from 'components/Button'

export const Wrapper = styled.main`
  display: flex;
  min-height: 100vh;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  padding: 42px;
  text-align: center;
`

export const ChuckJokesLogo = styled.img`
  width: 100%;
  max-width: 157px;
  margin-bottom: 30px;
`

export const PageTitle = styled.h1`
  font-size: ${props => props.theme.fonts.title.fontSize};
  line-height: ${props => props.theme.fonts.title.lineHeight};
  font-weight: ${props => props.theme.fonts.weight.normal};
  margin-bottom: 30px;
`

export const WelcomeTitle = styled.h2`
  font-size: ${props => props.theme.fonts.subtitle.fontSize};
  line-height: ${props => props.theme.fonts.subtitle.lineHeight};
  font-weight: ${props => props.theme.fonts.weight.normal};
`

export const IntroText = styled.p`
  font-size: ${props => props.theme.fonts.body.fontSize};
  line-height: ${props => props.theme.fonts.body.lineHeight};
  font-weight: ${props => props.theme.fonts.weight.normal};
  max-width: 300px;
  margin-bottom: 45px;
`

export const Button = styled(BaseButton)`
  width: 100%;
  max-width: 257px;
`
