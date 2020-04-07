import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Subtitle } from 'components/Text'
import backIcon from 'assets/icon-back.svg'

export const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 24px;
`

export const GoBack = styled(Link)`
  display: flex;
  align-items: center;
  font-size: ${props => props.theme.fonts.button.fontSize};
  line-height: ${props => props.theme.fonts.button.lineHeight};
  font-weight: ${props => props.theme.fonts.weight.normal};
`

export const BackIcon = styled.img.attrs({
  src: backIcon
})`
  margin-right: 8px;
`

export const CategoryName = styled(Subtitle)`
  text-transform: capitalize;
`
