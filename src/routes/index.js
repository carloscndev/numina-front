// Import Modules
import React, { lazy, Suspense, useState, useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

// Import Components
const Home = lazy(() => import('../components/containers/HomeContainer'))
const Gallery = lazy(() => import('../components/pages/Gallery'))
const Login = lazy(() => import('../components/containers/LoginConatiner'))
const NotFound = lazy(() => import('../components/pages/NotFound'))

const Routes = () => {
  const [isLoggedIn, setState] = useState()
  useEffect(() => {
    setState(window.sessionStorage.getItem('user') || '')
  }, [setState, isLoggedIn])
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path='/' exact strict render={() => !isLoggedIn ? <Redirect to='/login' /> : <Home />} />
        <Route path='/login' exact strict render={() => isLoggedIn ? <Redirect to='/' /> : <Login />} />
        <Route path='/gallery' exact strict render={() => isLoggedIn ? <Redirect to='/login' /> : <Gallery />} />
        <Route path='*' exact strict component={() => !isLoggedIn ? <Redirect to='/login' /> : <NotFound />} />
      </Switch>
    </Suspense>
  )
}
export default Routes
