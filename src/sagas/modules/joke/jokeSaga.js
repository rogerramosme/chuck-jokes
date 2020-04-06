import { put, takeLatest, call } from 'redux-saga/effects'
import * as api from 'services'
import { ACTION_TYPES, jokeRequestSuccess, jokeRequestError } from 'store/reducers/joke'

const { JOKE_REQUEST } = ACTION_TYPES

export function* getJoke({ payload }) {
  try {
    const response = yield call(api.joke, payload)
    yield put(jokeRequestSuccess(response))
  } catch (error) {
    yield put(jokeRequestError(error))
  }
}

export default function* watchJoke() {
  yield takeLatest(JOKE_REQUEST, getJoke)
}
