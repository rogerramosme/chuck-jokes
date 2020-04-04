import { createStore, applyMiddleware, compose } from 'redux'

import rootReducer from './reducers'

const isDevelopment = process.env.NODE_ENV

export default sagaMiddleWare => {
  const middleWares = [sagaMiddleWare]

  const composeEnhancers =
    isDevelopment && window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']
      ? window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']({})
      : compose

  const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleWares)))

  if (process.env.NODE_ENV === 'development') {
    window.store = store
  }

  return store
}
