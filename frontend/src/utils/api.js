import axios from 'axios'
axios.defaults.baseURL = import.meta.env.VITE_HOST || 'http://localhost:3000/api/'
axios.defaults.withCredentials = true

const conferenceRoutes = {
  attendee: '/conference',
  organizer: '/conference/organizer'
}

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

async function getConferences(role) {
  try {
    let response = await axios.get(conferenceRoutes[role] || '/conference')
    return response.data
  } catch (error) {
    return Promise.reject(error)
  }
}

async function getMembers() {
  try {
    let response = await axios.get('/user')
    return response.data
  } catch (error) {
    return Promise.reject(error)
  }
}

async function uploadFile(formData) {
  try {
    let response = await axios.post('/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    return response.data
  } catch (error) {
    return Promise.reject(error)
  }
}

async function uploadPaper(paper) {
  try {
    let response = await axios.post('/paper', {
      title: paper.title,
      abstract: paper.abstract,
      keywords: [],
      file: paper.paper,
      conference: paper.conference
    })
    return response.data
  } catch (error) {
    return Promise.reject(error)
  }
}

async function getPapers() {
  try {
    let response = await axios.get('/paper')
    return response.data
  } catch (error) {
    return Promise.reject(error)
  }
}

async function sendReview(paper) {
  try {
    let response = await axios.post('/review', {
      paper: paper.paperId,
      comment: paper.comment,
      status: paper.status
    })
    return response.data
  } catch (error) {
    return Promise.reject(error)
  }
}

export default {
  login,
  fetchUser,
  logout,
  getConferences,
  getMembers,
  uploadFile,
  uploadPaper,
  getPapers,
  sendReview
}
