import styled from 'styled-components'
import BaseChuckJokesLogo from 'components/ChuckJokesLogo'
import BaseButton from 'components/Button'
import breakpoints from 'config/media'

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
  max-width: 820px;
  grid-template-columns: 1fr;
  grid-row-gap: 24px;

  ${breakpoints.phone`
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 24px;
  `}

  ${breakpoints.tablet`
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 24px;
  `}
`

export const Button = styled(BaseButton)`
  width: 100%;
  text-transform: Capitalize;
`
