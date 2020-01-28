// Import Modules
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

// Import Components
import Routes from './routes'
import MainLayout from './components/containers/MainLayout'
import rootReducer from './redux/reducers/rootReducer'

// Import Styles
import './styles/reset.scss'

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <MainLayout>
        <Routes />
      </MainLayout>
    </Router>
  </Provider>,
  document.getElementById('root')
)
