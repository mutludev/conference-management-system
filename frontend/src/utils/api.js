import axios from 'axios'
axios.defaults.baseURL = import.meta.env.VITE_HOST || 'http://localhost:3000'
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

async function logout() {
  try {
    await axios.post('/auth/logout')
  } catch (error) {
    return Promise.reject(error)
  }
}

export default {
  login,
  fetchUser,
  logout
}
