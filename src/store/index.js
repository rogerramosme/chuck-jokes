import { createStore } from 'redux'
import rootReducer from './reducers'

const isDevelopment = process.env.NODE_ENV

export default () => {
  const store = createStore(
    rootReducer,
    isDevelopment && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

  if (process.env.NODE_ENV === 'development') {
    window.store = store
  }

  return store
}
