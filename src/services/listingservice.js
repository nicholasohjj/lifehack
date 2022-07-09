import axios from 'axios'

const baseUrl = "https://foodise-backend.herokuapp.com/"

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const addNew = (newListing) => {
  const request = axios.post(baseUrl, newListing)
  return request.then(response => response.data)
}

const update = (id,newListing) => {
  const request = axios.put(`${baseUrl}/${id}`, newListing)
  return request.then(response=>response.data)
}

const removeListing = (id) => {
  return axios.delete(`${baseUrl}/${id}`)
}



export default {getAll, addNew, update, removeListing}