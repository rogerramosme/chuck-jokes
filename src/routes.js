import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

const Intro = lazy(() => import('pages/Intro'))

export default () => (
  <Router>
    <Suspense fallback={<div>Loadding page...</div>}>
      <Switch>
        <Route exact path="/intro" component={Intro}></Route>
        <Redirect from="/" to="intro" />
      </Switch>
    </Suspense>
  </Router>
)
