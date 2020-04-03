import styled from 'styled-components'
import BaseChuckJokesLogo from 'components/ChuckJokesLogo'
import BaseButton from 'components/Button'

export const ChuckJokesLogo = styled(BaseChuckJokesLogo)`
  margin-bottom: 8px;
`

export const CategoriesTitle = styled.h1`
  font-size: ${props => props.theme.fonts.subtitle.fontSize};
  line-height: ${props => props.theme.fonts.subtitle.lineHeight};
  font-weight: ${props => props.theme.fonts.weight.normal};
  margin-bottom: 14px;
`

export const CategoriesIntro = styled.p`
  font-size: ${props => props.theme.fonts.body.fontSize};
  line-height: ${props => props.theme.fonts.body.lineHeight};
  font-weight: ${props => props.theme.fonts.weight.normal};
  text-align: center;
  margin-bottom: 50px;
`

export const CategoryList = styled.section`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr;
  grid-row-gap: 24px;
`

export const Button = styled(BaseButton)`
  text-transform: Capitalize;
`
