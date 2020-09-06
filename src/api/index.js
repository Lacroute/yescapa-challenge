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

// Mock the POST request for searching some vehicules
const searchBySomething = async () => {
  return axios
    .get(SEARCH_RESULT_API, config)
    .then(response => response.data.results)
    .catch(error => console.log(error))
}

// Mock the result of getting a vehicule by id from the API
const getVehiculeById = async (id) => {
  return axios
    .get(SEARCH_RESULT_API, config)
    .then(response => response.data.results.find(r => r.id === id))
    .catch(error => console.log(error))
}

export { searchBySomething, getVehiculeById }
