import axios from 'axios'

const baseUrl = "http://localhost:3001/listings"

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const addNew = (newListing) => {
  const request = axios.post(baseUrl, newListing)
  return request.then(response => response.data)
}

// const removePerson = (id) => {
//   return axios.delete(`${baseUrl}/${id}`)
// }

// const update = (id,newPerson) => {
//   const request = axios.put(`${baseUrl}/${id}`, newPerson)
//   return request.then(response=>response.data)
  
// }

export default {getAll, addNew}