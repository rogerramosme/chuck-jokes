import styled from 'styled-components'
import breakponts from 'config/media'

export default styled.main`
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 70px 24px;

  ${breakponts.tablet`
    padding-left: 48px;
    padding-right: 48px;
  `}
`
