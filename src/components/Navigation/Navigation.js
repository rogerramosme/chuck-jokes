import React, { memo } from 'react'
import { ROUTES } from 'routes'
import { string } from 'prop-types'

import { Wrapper, GoBack, BackIcon, CategoryName } from './Navigation.style'

const Navigation = ({ category }) => (
  <Wrapper>
    <GoBack to={ROUTES.CATEGORIES}>
      <BackIcon />
      Categories
    </GoBack>
    {category && <CategoryName>{category}</CategoryName>}
  </Wrapper>
)

Navigation.propTypes = {
  category: string
}

Navigation.defaultProps = {
  category: ''
}

export default memo(Navigation)
