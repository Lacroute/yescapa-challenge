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

// Mock the POST request for searching some vehicles
const searchBySomething = async () => {
  return axios
    .get(SEARCH_RESULT_API, config)
    .then(response => response.data.results)
}

// Mock the result of getting a vehicle by id from the API
const getVehicleById = async (id) => {
  return axios
    .get(SEARCH_RESULT_API, config)
    .then(response => response.data.results.find(r => r.id === id))
}

export { searchBySomething, getVehicleById }
