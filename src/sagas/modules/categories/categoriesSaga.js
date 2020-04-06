import { put, takeLatest, call } from 'redux-saga/effects'
import * as api from 'services'
import {
  ACTION_TYPES,
  categoriesRequestSuccess,
  categoriesRequestError
} from 'store/reducers/categories'

const { CATEGORIES_REQUEST } = ACTION_TYPES

export function* getCategories() {
  try {
    const response = yield call(api.categories)
    yield put(categoriesRequestSuccess(response))
  } catch (error) {
    yield put(categoriesRequestError(error))
  }
}

export default function* watchCategories() {
  yield takeLatest(CATEGORIES_REQUEST, getCategories)
}
