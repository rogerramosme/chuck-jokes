import { all, fork } from 'redux-saga/effects'
import watchCategories from './modules/categories'

export default function* rootSaga() {
  yield all([fork(watchCategories)])
}
