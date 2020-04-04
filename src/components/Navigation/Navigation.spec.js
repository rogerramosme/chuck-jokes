import React from 'react'
import { fireEvent, cleanup } from '@testing-library/react'
import { renderWithThemeAndProvider } from '__tests__/utils'
import { MemoryRouter, Route, Switch } from 'react-router-dom'
import { ROUTES } from 'routes'
import { act } from 'react-dom/test-utils'
import Navigation from './Navigation'

const renderComponent = props =>
  renderWithThemeAndProvider(
    <MemoryRouter initialEntries={['/navigation']}>
      <Switch>
        <Route exact path="/navigation">
          <Navigation {...props} />
        </Route>
        <Route exact path={ROUTES.CATEGORIES}>
          <div>Categories page</div>
        </Route>
      </Switch>
    </MemoryRouter>
  )

describe.only('Navigation component', () => {
  beforeEach(cleanup)
  describe('Rendering', () => {
    it('Should navigation with category title', () => {
      const { getByText } = renderComponent({ category: 'Animal' })

      expect(getByText('Animal')).toBeInTheDocument()
    })

    it('Should render without category title', () => {
      const { queryByText } = renderComponent()

      expect(queryByText(/Animal/)).toBeNull()
    })
  })

  describe('Interations', () => {
    it('Should go to categories page when click on categories button', () => {
      const { container, getByText } = renderComponent()

      act(() => {
        fireEvent.click(container.querySelector('a'))
      })

      expect(getByText('Categories page')).toBeInTheDocument()
    })
  })
})
