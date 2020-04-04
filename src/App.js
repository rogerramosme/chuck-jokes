import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import configureStore from 'store'
import createSagaMiddleware from 'redux-saga'
import rootSaga from 'sagas'
import { ThemeProvider } from 'styled-components'
import theme from 'config/theme'
import GlobalStyles from 'config/global-styles'
import Routes from 'routes'

const sagaMiddleWare = createSagaMiddleware()
const store = configureStore(sagaMiddleWare)

sagaMiddleWare.run(rootSaga)

export default () => {
  useEffect(() => {
    document.querySelector('.loading').classList.add('hide')
  }, [])
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <GlobalStyles />
        <Routes />
      </Provider>
    </ThemeProvider>
  )
}
