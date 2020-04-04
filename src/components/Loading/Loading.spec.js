import React from 'react'
import { renderWithThemeAndProvider } from '__tests__/utils'
import Loading from './Loading'

describe('Loading Component', () => {
  it('should render with props spread', () => {
    const { container } = renderWithThemeAndProvider(<Loading data-test="true" />)
    expect(container.querySelector('[data-test=true]')).toBeInTheDocument()
  })
})
