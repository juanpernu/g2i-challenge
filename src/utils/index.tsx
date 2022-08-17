import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://opentdb.com/api.php'
});
