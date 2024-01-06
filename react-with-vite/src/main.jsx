import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './assets/css/style.css'
import Routings from './pages/router/Routings'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Routings />
  </React.StrictMode>,
)
