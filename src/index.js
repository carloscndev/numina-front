// Import Modules
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

// Import Components
import Routes from './routes'

// Import Styles
import './styles/reset.scss'

ReactDOM.render(
  <Router>
    <Routes />
  </Router>,
  document.getElementById('root')
)
