import { SEARCH_RESULT_API } from '@/api/config'
import axios from 'axios'

const config = {
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Methods': 'GET'
  },
  withCredentials: false,
  responseType: 'json'
}

const searchBySomething = async (params) => {
  console.log('searchBySomething')
  return axios
    .get(SEARCH_RESULT_API, config)
    .then(response => response.data.results)
    .catch(error => console.log(error))
}

export { searchBySomething }
