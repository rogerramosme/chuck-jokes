import React from 'react'
import { cleanup, fireEvent } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { renderWithThemeAndProvider, mockStore } from '__tests__/utils'
import { MemoryRouter, Route, Switch } from 'react-router-dom'
import { ROUTES } from 'routes'
import { initialState } from 'store/reducers/categories'
import getCategories from 'services'
import Categories from './Categories'

jest.mock('services')

const renderComponent = overWriteState => {
  const store = mockStore({ categories: { ...initialState, ...overWriteState } })

  return renderWithThemeAndProvider(
    <MemoryRouter initialEntries={[ROUTES.CATEGORIES]}>
      <Switch>
        <Route exact path={ROUTES.CATEGORIES}>
          <Categories />
        </Route>
      </Switch>
    </MemoryRouter>,
    store
  )
}

describe('Categories Page', () => {
  beforeEach(cleanup)

  it('Should render loading state', () => {
    const state = { isFetching: true }
    const { getByTestId } = renderComponent(state)

    expect(getByTestId('loader')).toBeInTheDocument()
  })

  it('Should render categories list', async () => {
    const state = { isFetching: false, isSuccess: true, data: ['science', 'dev'] }
    const { getByText } = renderComponent(state)

    expect(getByText('science')).toBeInTheDocument()
  })

  it('Should render Error page', () => {
    const error = 'Cannot get categories'
    const state = { isError: true, error }
    const { getByText } = renderComponent(state)

    expect(getByText(error)).toBeInTheDocument()
  })
})
