import categoriesReducer, {
  initialState,
  categoriesRequest,
  categoriesRequestSuccess
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
      isFetching: false,
      isSuccess: true,
      data: mockResult
    })
  })
})
