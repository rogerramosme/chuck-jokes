const API_URL = 'https://api.chucknorris.io/jokes/categories'

export default async () => {
  const codeRegExp = /20(\d)/
  const response = await fetch(API_URL, {
    method: 'GET'
  })
  if (!codeRegExp.test(response.status)) {
    throw new Error('Cannot get categories')
  }
  const data = await response.json()
  return data
}
