import axios from 'axios'

const api = axios.create({
    baseURL: '[backend_url_and_port]',
});

export default api;