import React, { lazy, Suspense } from 'react'
import Loading from 'components/Loading'
import { createBrowserHistory } from 'history'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

const Intro = lazy(() => import('pages/Intro'))
const Categories = lazy(() => import('pages/Categories'))
const Joke = lazy(() => import('pages/Joke'))
const ErrorPage = lazy(() => import('components/Error'))

export const ROUTES = {
  INTRO: '/',
  CATEGORIES: '/categories',
  RAMDOM_JOKE: '/random-joke'
}

export default () => (
  <Router history={createBrowserHistory()}>
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route exact path={ROUTES.INTRO} component={Intro} />
        <Route exact path={ROUTES.CATEGORIES} component={Categories} />
        <Route exact path={`${ROUTES.RAMDOM_JOKE}/:category?`} component={Joke} />
        <Route
          path="*"
          render={() => <ErrorPage errorMessage="The page you are looking for doesn't exist" />}
        />
      </Switch>
    </Suspense>
  </Router>
)
