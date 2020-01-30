// Import Modules
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

// Import Components
import Routes from './routes'
import MainLayout from './components/containers/MainLayout'
import rootReducer from './redux/reducers/rootReducer'
import { inputsValidationMiddleware } from './redux/middlewares/inputsValidationMiddleware'

// Import Styles
import './styles/reset.scss'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk, inputsValidationMiddleware)
  )
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
