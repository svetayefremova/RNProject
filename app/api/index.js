import axios from 'axios';

const API_URL = 'https://s3.eu-central-1.amazonaws.com/turtecdev/test.json';

export default function getList() {
  return axios.get(`${API_URL}`).then(response => response.data);
}