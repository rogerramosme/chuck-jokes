import React from 'react'
import { render } from '@testing-library/react'
import Intro from './Intro'

describe('Intro page', () => {
  it('Should render intro page', () => {
    const { queryByText } = render(<Intro />)
    expect(queryByText(/Wellcome to intro/)).toBeInTheDocument()
  })
})
