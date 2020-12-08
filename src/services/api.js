import axios from "axios";

const api = axios.create({baseURL: 'https://api.taylor.rest'});

export default api;