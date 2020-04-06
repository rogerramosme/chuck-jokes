import { all, fork } from 'redux-saga/effects'
import watchCategories from './modules/categories'
import watchJoke from './modules/joke'

export default function* rootSaga() {
  yield all([fork(watchCategories), fork(watchJoke)])
}
