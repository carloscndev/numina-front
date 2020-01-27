// Import Modules
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

// Import Components
import Routes from './routes'
import MainLayout from './components/layouts/MainLayout'

// Import Styles
import './styles/reset.scss'

ReactDOM.render(
  <Router>
    <MainLayout>
      <Routes />
    </MainLayout>
  </Router>,
  document.getElementById('root')
)
