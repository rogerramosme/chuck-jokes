import React from 'react'
import { fireEvent } from '@testing-library/react'
import { renderWithThemeAndProvider } from '__tests__/utils'
import { MemoryRouter, Route, Switch } from 'react-router-dom'
import theme from 'config/theme'
import { act } from 'react-dom/test-utils'
import Error from './Error'

const errorMessage = 'Something wrong isnt right'
const buttonText = 'Try again'
const handleError = jest.fn()

const renderComponent = props =>
  renderWithThemeAndProvider(
    <MemoryRouter initialEntries={['/error']}>
      <Switch>
        <Route exact path="/error">
          <Error handleError={handleError} {...props} />
        </Route>
        <Route exact path="/">
          <div>Intro Page</div>
        </Route>
      </Switch>
    </MemoryRouter>
  )

describe.only('Error component', () => {
  describe('Rendering', () => {
    it('Should render error message', () => {
      const { getByText } = renderComponent({ errorMessage })

      expect(getByText(errorMessage)).toBeInTheDocument()
    })

    it('Should render only go back button', () => {
      const { container } = renderComponent()

      expect(container.querySelectorAll('button').length).toEqual(1)
    })

    it('Should render outline "Go Home" button when buttonText does not exists', () => {
      const { getByText } = renderComponent({ buttonText })
      const buttonComputedStyles = window.getComputedStyle(getByText('Go Home'))

      expect(buttonComputedStyles.borderColor).toEqual(theme.colors.black)
    })

    it('Should render go back button', () => {
      const { getByText } = renderComponent({ buttonText })

      expect(getByText(buttonText)).toBeInTheDocument()
    })
  })

  describe('Interations', () => {
    it('Should call handleError onClick', () => {
      const { getByText } = renderComponent({ buttonText, handleError })

      act(() => {
        fireEvent.click(getByText(buttonText))
      })

      expect(handleError).toHaveBeenCalled()
    })

    it('Should go to categories page when click "Go Home" button', async () => {
      const { getByText, container } = renderComponent()

      act(() => {
        fireEvent.click(container.querySelector('a'), { bubbles: true })
      })

      expect(getByText('Intro Page')).toBeInTheDocument()
    })
  })
})
