import styled from 'styled-components'
import { Link } from 'react-router-dom'
import backIcon from 'assets/icon-back.svg'

export const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
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

export const CategoryName = styled.div`
  font-size: ${props => props.theme.fonts.subtitle.fontSize};
  line-height: ${props => props.theme.fonts.subtitle.lineHeight};
  font-weight: ${props => props.theme.fonts.weight.normal};
  text-transform: capitalize;
`
