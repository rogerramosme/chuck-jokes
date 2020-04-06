import { combineReducers } from 'redux'
import categories from './categories'
import joke from './joke'

export default combineReducers({
  categories,
  joke
})
