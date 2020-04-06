import { call, put, takeLatest } from 'redux-saga/effects'
import { cloneableGenerator } from '@redux-saga/testing-utils'
import * as api from 'services'
import { ACTION_TYPES, jokeRequestSuccess, jokeRequestError } from 'store/reducers/joke'
import watchJoke, { getJoke } from './jokeSaga'

const { JOKE_REQUEST } = ACTION_TYPES
const payload = {}

describe('Joke Saga Module', () => {
  it('check if Joke saga watcher dispatchs takeLatest joke request', () => {
    const watchJokeGen = watchJoke()
    expect(watchJokeGen.next().value).toEqual(takeLatest(JOKE_REQUEST, getJoke))
  })

  it('Should call joke', () => {
    const jokeGen = cloneableGenerator(getJoke)(payload)
    expect(jokeGen.next().value).toEqual(call(api.joke, undefined))
  })

  it('Should dispatch JOKE_REQUEST_SUCCESS', () => {
    const jokeGen = cloneableGenerator(getJoke)(payload)
    jokeGen.next()

    expect(jokeGen.next().value).toEqual(put(jokeRequestSuccess(undefined)))
  })

  it('Should dispatch JOKE_REQUEST_ERROR', () => {
    const jokeGen = cloneableGenerator(getJoke)(payload)
    jokeGen.next()

    const errorResponse = 'Cannot load joke'

    expect(jokeGen.throw(errorResponse).value).toEqual(put(jokeRequestError(errorResponse)))
  })
})
