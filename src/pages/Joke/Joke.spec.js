import React from 'react'
import { MemoryRouter, Route, Switch } from 'react-router-dom'
import { ROUTES } from 'routes'
import { renderWithThemeAndProvider, mockStore } from '__tests__/utils'
import { initialState } from 'store/reducers/joke'
import Joke from './Joke'

const renderComponent = overWriteState => {
  const store = mockStore({ joke: { ...initialState, ...overWriteState } })

  return renderWithThemeAndProvider(
    <MemoryRouter initialEntries={[`${ROUTES.RAMDOM_JOKE}/science`]}>
      <Switch>
        <Route exact path={`${ROUTES.RAMDOM_JOKE}/:category?`}>
          <Joke />
        </Route>
      </Switch>
    </MemoryRouter>,
    store
  )
}

describe('Joke page', () => {
  describe('Loading', () => {
    it('Should render general loading state', () => {
      const state = { isFetching: true }
      const { getByTestId } = renderComponent(state)

      expect(getByTestId('loader')).toBeInTheDocument()
    })

    it('Should keep navigation visibile if any joke has loaded before', () => {
      const joke = 'Joke content'
      const state = { isFetching: true, isSuccess: true, data: { value: joke } }
      const { getByTestId, getByText } = renderComponent(state)

      expect(getByTestId('loader')).toBeInTheDocument()
      expect(getByText('Categories')).toBeInTheDocument()
    })
  })

  describe('Rendering', () => {
    it('Should render Joke', () => {
      const joke = 'Joke content'
      const state = { isFetching: false, isSuccess: true, data: { value: joke } }
      const { getByText } = renderComponent(state)

      expect(getByText(joke)).toBeInTheDocument()
    })

    it('Should render Error page', () => {
      const state = { isError: true }
      const { getByText } = renderComponent(state)

      expect(getByText('Try again')).toBeInTheDocument()
    })
  })
})
