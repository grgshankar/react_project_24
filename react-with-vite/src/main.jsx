import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './assets/css/style.css'
import Routings from './pages/router/Routings'
import ThemeProvider  from './config/theme.context'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <Routings />
    </ThemeProvider>
  </React.StrictMode>,
)
