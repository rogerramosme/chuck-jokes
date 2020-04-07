import styled from 'styled-components'

export const Title = styled.h1`
  font-size: ${props => props.theme.fonts.title.fontSize};
  line-height: ${props => props.theme.fonts.title.lineHeight};
  font-weight: ${props => props.theme.fonts.weight.normal};
`

export const Subtitle = styled.h1`
  font-size: ${props => props.theme.fonts.subtitle.fontSize};
  line-height: ${props => props.theme.fonts.subtitle.lineHeight};
  font-weight: ${props => props.theme.fonts.weight.normal};
`

export const Body = styled.p`
  font-size: ${props => props.theme.fonts.body.fontSize};
  line-height: ${props => props.theme.fonts.body.lineHeight};
  font-weight: ${props => props.theme.fonts.weight.normal};
`
