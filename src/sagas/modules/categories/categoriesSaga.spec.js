import { call, put, takeLatest } from 'redux-saga/effects'
import { cloneableGenerator } from '@redux-saga/testing-utils'
import getCategoriesService from 'services'
import {
  ACTION_TYPES,
  categoriesRequestSuccess,
  categoriesRequestError
} from 'store/reducers/categories'
import watchCategories, { getCategories } from './categoriesSaga'

const { CATEGORIES_REQUEST } = ACTION_TYPES

describe('Categories Saga Module', () => {
  it('check if home saga watcher dispatchs takeLatest home request', () => {
    const watchCategoriesGen = watchCategories()
    expect(watchCategoriesGen.next().value).toEqual(takeLatest(CATEGORIES_REQUEST, getCategories))
  })

  it('Should call categories', () => {
    const categoriesGen = cloneableGenerator(getCategories)()
    expect(categoriesGen.next().value).toEqual(call(getCategoriesService))
  })

  it('Should dispatch CATEGORIES_REQUEST_SUCCESS', () => {
    const categoriesGen = cloneableGenerator(getCategories)()
    categoriesGen.next()

    expect(categoriesGen.next().value).toEqual(put(categoriesRequestSuccess(undefined)))
  })

  it('Should dispatch CATEGORIES_REQUEST_ERROR', () => {
    const categoriesGen = cloneableGenerator(getCategories)()
    categoriesGen.next()

    const errorResponse = 'Cannot load categories'

    expect(categoriesGen.throw(errorResponse).value).toEqual(
      put(categoriesRequestError(errorResponse))
    )
  })
})
