import styled from 'styled-components'
import { Link as BaseLink } from 'react-router-dom'
import BaseContent from 'components/Content'
import BaseButton from 'components/Button'
import breakpoints from 'config/media'

export const Content = styled(BaseContent)`
  justify-content: center;
  text-align: center;
`

export const ErrorTitle = styled.h1`
  font-size: ${props => props.theme.fonts.title.fontSize};
  line-height: ${props => props.theme.fonts.title.lineHeight};
  font-weight: ${props => props.theme.fonts.weight.normal};
  margin-bottom: 30px;

  ${breakpoints.tablet`
    max-width: 400px;
  `}
`

export const ErrorSubtitle = styled.h2`
  font-size: ${props => props.theme.fonts.subtitle.fontSize};
  line-height: ${props => props.theme.fonts.subtitle.lineHeight};
  font-weight: ${props => props.theme.fonts.weight.normal};
  margin-bottom: 30px;
`
export const ErrorDescription = styled.h2`
  font-size: ${props => props.theme.fonts.body.fontSize};
  line-height: ${props => props.theme.fonts.body.lineHeight};
  font-weight: ${props => props.theme.fonts.weight.normal};
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
