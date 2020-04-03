import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import configureStore from 'store'
import { ThemeProvider } from 'styled-components'
import theme from 'config/theme'
import GlobalStyles from 'config/global-styles'
import Routes from 'routes'

const store = configureStore()

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
