import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from 'config/theme'
import { render } from '@testing-library/react'

export default component => render(<ThemeProvider theme={theme}>{component}</ThemeProvider>)
