import styled from 'styled-components'
import BaseButton from 'components/Button'
import { Title, Subtitle, Body } from 'components/Text'
import BaseChuckJokesLogo from 'components/ChuckJokesLogo'
import BaseContent from 'components/Content'

export const Content = styled(BaseContent)`
  min-height: 100vh;
  justify-content: center;
  text-align: center;
`

export const ChuckJokesLogo = styled(BaseChuckJokesLogo)`
  margin-bottom: 30px;
`

export const PageTitle = styled(Title)``

export const WelcomeTitle = styled(Subtitle)``

export const IntroText = styled(Body)`
  max-width: 300px;
  margin-bottom: 45px;
`

export const Button = styled(BaseButton)`
  width: 100%;
  max-width: 257px;
`
