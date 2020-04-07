import styled from 'styled-components'
import BaseChuckJokesLogo from 'components/ChuckJokesLogo'
import BaseButton from 'components/Button'
import { Title, Body } from 'components/Text'
import breakpoints from 'config/media'

export const ChuckJokesLogo = styled(BaseChuckJokesLogo)`
  margin-bottom: 8px;
`

export const CategoriesTitle = styled(Title)`
  margin-bottom: 14px;
`

export const CategoriesIntro = styled(Body)`
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
