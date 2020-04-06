export const initialState = {
  isFetching: false,
  isSuccess: false,
  isError: false,
  error: null,
  data: {}
}

export const ACTION_TYPES = {
  JOKE_REQUEST: 'JOKE_REQUEST',
  JOKE_REQUEST_SUCCESS: 'JOKE_REQUEST_SUCCESS',
  JOKE_REQUEST_ERROR: 'JOKE_REQUEST_ERROR'
}

export const jokeRequest = payload => ({
  type: ACTION_TYPES.JOKE_REQUEST,
  payload
})

export const jokeRequestSuccess = payload => ({
  type: ACTION_TYPES.JOKE_REQUEST_SUCCESS,
  payload
})

export const jokeRequestError = error => ({
  type: ACTION_TYPES.JOKE_REQUEST_ERROR,
  payload: error
})

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION_TYPES.JOKE_REQUEST:
      return {
        ...state,
        isFetching: true,
        isSuccess: false,
        isError: false,
        error: null
      }
    case ACTION_TYPES.JOKE_REQUEST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isSuccess: true,
        data: payload.data
      }
    case ACTION_TYPES.JOKE_REQUEST_ERROR:
      return {
        ...state,
        isFetching: false,
        isSuccess: false,
        isError: true,
        error: payload,
        data: {}
      }
    default:
      return state
  }
}
