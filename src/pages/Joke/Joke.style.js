import styled from 'styled-components'
import breakpoints from 'config/media'
import BaseButton from 'components/Button'
import quoteIcon from 'assets/icon-quote.svg'

export const Wrapper = styled.main`
  display: flex;
  flex-flow: column;
  min-height: 100vh;
  padding: 24px;
`

export const JokeWrapper = styled.section`
  flex-grow: 1;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`

export const Joke = styled.blockquote`
  display: flex;
  font-size: ${props => props.theme.fonts.body.fontSize};
  line-height: ${props => props.theme.fonts.body.lineHeight};
  font-weight: ${props => props.theme.fonts.weight.normal};
  padding-left: 28px;
  padding-top: 14px;
  margin-bottom: 72px;
  position: relative;

  &:before {
    display: block;
    content: '';
    width: 28px;
    height: 28px;
    position: absolute;
    top: 0;
    left: 0;
    background-image: url('${quoteIcon}');
    background-repeat: no-repeat;
  }

  ${breakpoints.tablet`
    font-size: ${props => props.theme.fonts.subtitle.fontSize};
    line-height: ${props => props.theme.fonts.subtitle.lineHeight};
    max-width: 600px;
  `}
`

export const Button = styled(BaseButton)`
  min-width: 175px;
`
