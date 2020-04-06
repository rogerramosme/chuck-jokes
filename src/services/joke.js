import request from './request'

const RANDOM_JOKE_BY_CATEGORY = '/random'

export default category => {
  const requestUrl = category
    ? `${RANDOM_JOKE_BY_CATEGORY}/?category=${category}`
    : RANDOM_JOKE_BY_CATEGORY

  return request(requestUrl)
}
