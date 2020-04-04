import categoriesReducer, {
  initialState,
  categoriesRequest,
  categoriesRequestSuccess,
  categoriesRequestError
} from './categoriesReducer'

describe('Categories Reducer', () => {
  it('Should set default state', () => {
    expect(categoriesReducer(undefined, { type: 'no match' })).toEqual(initialState)
  })

  it('Should set CATEGORIES_REQUEST state', () => {
    expect(categoriesReducer(undefined, categoriesRequest())).toEqual({
      ...initialState,
      isFetching: true
    })
  })

  it('Should set CATEGORIES_REQUEST_SUCCESS state', () => {
    const mockResult = ['food', 'dev']
    expect(categoriesReducer(undefined, categoriesRequestSuccess(mockResult))).toEqual({
      ...initialState,
      isSuccess: true,
      data: mockResult
    })
  })

  it('Should set CATEGORIES_REQUEST_ERROR state', () => {
    const error = 'Cannot get joke categories'
    expect(categoriesReducer(undefined, categoriesRequestError(error))).toEqual({
      ...initialState,
      isError: true,
      error
    })
  })
})
