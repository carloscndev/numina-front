// Import Modules
import React, { lazy, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'

// Import Components
const Home = lazy(() => import('../components/pages/Home'))
const Gallery = lazy(() => import('../components/pages/Gallery'))
const Login = lazy(() => import('../components/containers/LoginConatiner'))
const NotFound = lazy(() => import('../components/pages/NotFound'))

const Routes = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Switch>
      <Route path='/' exact strict render={() => <Home />} />
      <Route path='/login' exact strict render={() => <Login />} />
      <Route path='/gallery' exact strict render={() => <Gallery />} />
      <Route path='*' exact strict component={() => <NotFound />} />
    </Switch>
  </Suspense>
)

export default Routes
