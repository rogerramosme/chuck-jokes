import React from 'react'
import { renderWithTheme } from '__tests__/utils'
import Intro from './Intro'

describe('Intro page', () => {
  it('Should render intro page', () => {
    const { queryByText } = renderWithTheme(<Intro />)
    expect(queryByText(/Chuck Jokes/)).toBeInTheDocument()
  })
})
