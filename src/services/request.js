import axios from 'axios'

export const BASE_URL = 'https://api.chucknorris.io/jokes'

export default url => axios.get(BASE_URL + url)
