import axios from 'axios';

axios.defaults.baseURL = 'https://musicmaniac-drf-api-961711dd9bd4.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true