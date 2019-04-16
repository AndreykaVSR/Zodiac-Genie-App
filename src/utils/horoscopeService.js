import tokenService from './tokenService';

const BASE_URL = '/api/horoscope/';

export default {
  index,
  create
};

function index() {
  return fetch(BASE_URL).then(res => res.json());
}


function create(horoscope) {
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + tokenService.getToken()
    },
    body: JSON.stringify(horoscope)
  };
  return fetch(BASE_URL, options).then(res => res.json());
}
