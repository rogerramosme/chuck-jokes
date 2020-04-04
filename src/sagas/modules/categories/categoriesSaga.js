import { put, takeLatest, call } from 'redux-saga/effects'
import getCategoriesService from 'services'
import {
  ACTION_TYPES,
  categoriesRequestSuccess,
  categoriesRequestError
} from 'store/reducers/categories'

const { CATEGORIES_REQUEST } = ACTION_TYPES

export function* getCategories() {
  try {
    const response = yield call(getCategoriesService)
    yield put(categoriesRequestSuccess(response))
  } catch (error) {
    yield put(categoriesRequestError('Cannot load categories'))
  }
}

export default function* watchCategories() {
  yield takeLatest(CATEGORIES_REQUEST, getCategories)
}
