import axios from 'axios';

const tesloaApi = axios.create({
  baseURL: 'http://localhost:3000/api',
});

export { tesloaApi };
