import { css } from 'styled-components'

const sizes = {
  tablet: 768,
  phone: 375
}

export const breakpoints = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `

  return acc
}, {})
