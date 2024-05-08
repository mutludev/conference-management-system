import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000/api'
axios.defaults.withCredentials = true

async function login(email, password) {
  try {
    let response = await axios.post('/auth/login', { email, password })
    return response.data
  } catch (error) {
    return Promise.reject(error)
  }
}

async function fetchUser() {
  try {
    let response = await axios.get('/auth/user')
    return response.data
  } catch (error) {
    return Promise.reject(error)
  }
}

export default {
  login,
  fetchUser
}
