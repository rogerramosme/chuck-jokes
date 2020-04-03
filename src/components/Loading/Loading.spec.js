import React from 'react'
import renderWithTheme from '__tests__/utils'
import Loading from './Loading'

describe('Loading Component', () => {
  it('should render with props spread', () => {
    const { container } = renderWithTheme(<Loading data-test="true" />)
    expect(container.querySelector('[data-test=true]')).toBeInTheDocument()
  })
})
