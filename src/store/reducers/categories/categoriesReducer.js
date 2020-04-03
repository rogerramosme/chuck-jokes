const initialState = {
  isFetching: false,
  isSuccess: false,
  isError: false,
  error: null,
  data: []
}

export const ACTION_TYPES = {
  CATEGORIES_REQUEST: 'CATEGORIES_REQUEST',
  CATEGORIES_REQUEST_SUCCESS: 'CATEGORIES_REQUEST_SUCCESS'
}

export const categoriesRequest = () => ({
  type: ACTION_TYPES.CATEGORIES_REQUEST
})

export const categoriesRequestSuccess = payload => ({
  type: ACTION_TYPES.CATEGORIES_REQUEST_SUCCESS,
  payload
})

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION_TYPES.CATEGORIES_REQUEST:
      return {
        ...state,
        isFetching: true,
        isSuccess: false,
        isError: false,
        error: null
      }
    case ACTION_TYPES.CATEGORIES_REQUEST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isSuccess: true,
        data: payload
      }
    default:
      return state
  }
}
