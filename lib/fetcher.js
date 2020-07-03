import axios from 'axios';

export default async function fetcher(...args) {
  try {
    const response = await axios.get(...args);
    return response.data;
  } catch (err) {
    let error;
    const { response, request } = err;
    if (response) {
      error = new Error(response.statusText);
      error.response = response;
      error.data = response.data;
    } else if (request) {
      error = new Error('No response was received');
      error.request = request;
    } else {
      error = new Error(err.message);
    }
    throw error;
  }
}
