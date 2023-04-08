import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './main.scss'
import { createTheme, ThemeProvider } from '@mui/material'

const theme = createTheme({
  typography: {
    button: {
      textTransform: 'none'
    }
  }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
