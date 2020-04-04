import React from 'react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import createSagaMiddleware from 'redux-saga'
import { ThemeProvider } from 'styled-components'
import theme from 'config/theme'
import { render } from '@testing-library/react'

const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware]

export const mockStore = configureStore(middlewares)

export const renderWithThemeAndProvider = (component, store) =>
  render(
    <ThemeProvider theme={theme}>
      {!store ? component : <Provider store={store}>{component}</Provider>}
    </ThemeProvider>
  )
