import React from 'react'
import { MemoryRouter, Route, Switch } from 'react-router-dom'
import { ROUTES } from 'routes'
import { renderWithThemeAndProvider } from '__tests__/utils'
import Joke from './Joke'

const renderComponent = () =>
  renderWithThemeAndProvider(
    <MemoryRouter initialEntries={[`${ROUTES.RAMDOM_JOKE}/science`]}>
      <Switch>
        <Route exact path={`${ROUTES.RAMDOM_JOKE}/:category?`}>
          <Joke />
        </Route>
      </Switch>
    </MemoryRouter>
  )

describe('Joke page', () => {
  it('Should render Joke page', () => {
    const { getByText } = renderComponent()

    expect(getByText(/science/)).toBeInTheDocument()
  })
})
