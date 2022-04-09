import React from 'react'
import ReactDOM from 'react-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import App from './App'

const theme = createTheme({
  palette: {
    primary: {
      main: '#0048bd',
    },
    secondary: {
      main: '#fff',
    },
  },
  typography: {
    fontFamily: '"Quantico", sans-serif',
  },
  components: {
    MuiButton: {
      defaultProps: {
        color: 'primary',
        centerRipple: true,
        style: {
          padding: '12px 25px',
          color: '#fff',
          borderWidth: '2.5px',
        },
      },
    },
  },
})

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
