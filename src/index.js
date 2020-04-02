import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import theme from 'config/theme'
import GlobalStyles from 'config/global-styles'
import Routes from 'routes'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <GlobalStyles />
      <Routes />
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root')
)

serviceWorker.unregister()
