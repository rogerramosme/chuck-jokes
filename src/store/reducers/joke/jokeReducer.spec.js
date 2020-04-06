import jokeReducer, {
  initialState,
  jokeRequest,
  jokeRequestSuccess,
  jokeRequestError
} from './jokeReducer'

describe('Joke Reducer', () => {
  it('Should set default state', () => {
    expect(jokeReducer(undefined, { type: 'no match' })).toEqual(initialState)
  })

  it('Should set JOKE_REQUEST state', () => {
    expect(jokeReducer(undefined, jokeRequest())).toEqual({
      ...initialState,
      isFetching: true
    })
  })

  it('Should set JOKE_REQUEST_SUCCESS state', () => {
    const mockResult = ['food', 'dev']
    expect(jokeReducer(undefined, jokeRequestSuccess(mockResult))).toEqual({
      ...initialState,
      isSuccess: true,
      data: mockResult
    })
  })

  it('Should set JOKE_REQUEST_ERROR state', () => {
    const error = 'Cannot get joke categories'
    expect(jokeReducer(undefined, jokeRequestError(error))).toEqual({
      ...initialState,
      isError: true,
      error
    })
  })
})
