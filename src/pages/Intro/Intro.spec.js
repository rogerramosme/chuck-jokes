import React from 'react'
import { renderWithThemeAndProvider } from '__tests__/utils'
import { BrowserRouter as Router } from 'react-router-dom'
import Intro from './Intro'

describe('Intro page', () => {
  it('Should render intro page', () => {
    const { queryByText } = renderWithThemeAndProvider(
      <Router>
        <Intro />
      </Router>
    )
    expect(queryByText(/Chuck Jokes/)).toBeInTheDocument()
  })
})
