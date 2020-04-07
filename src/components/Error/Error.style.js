import styled from 'styled-components'
import { Link as BaseLink } from 'react-router-dom'
import BaseContent from 'components/Content'
import BaseButton from 'components/Button'
import { Title, Subtitle, Body } from 'components/Text'
import breakpoints from 'config/media'

export const Content = styled(BaseContent)`
  justify-content: center;
  text-align: center;
  min-height: 100vh;
`

export const ErrorTitle = styled(Title)`
  margin-bottom: 30px;

  ${breakpoints.tablet`
    max-width: 400px;
  `}
`

export const ErrorSubtitle = styled(Subtitle)`
  margin-bottom: 30px;
`
export const ErrorDescription = styled(Body)`
  margin-bottom: 40px;
`

export const Link = styled(BaseLink)`
  width: 100%;
  text-decoration: none;
`

export const Button = styled(BaseButton)`
  width: 100%;
  max-width: 257px;

  & + ${Link} {
    margin-top: 12px;
  }
`
