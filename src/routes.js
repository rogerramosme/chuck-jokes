import React, { lazy, Suspense } from 'react'
import Loading from 'components/Loading'
import { createBrowserHistory } from 'history'
import { Router, Switch, Route } from 'react-router-dom'

const Intro = lazy(() => import('pages/Intro'))
const Categories = lazy(() => import('pages/Categories'))
const ErrorPage = lazy(() => import('components/Error'))

export default () => (
  <Router history={createBrowserHistory()}>
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route exact path="/" component={Intro} />
        <Route exact path="/categories" component={Categories} />
        <Route
          path="*"
          render={() => <ErrorPage errorMessage="The page you are looking for doesn't exist" />}
        />
      </Switch>
    </Suspense>
  </Router>
)
