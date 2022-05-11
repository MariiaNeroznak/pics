import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID jx402nbrHT9JHehav_e5yagzuWYz1XUQhVSjgmrW-iw',
  },
});
