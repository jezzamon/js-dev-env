import 'whatwg-fetch'; //polyfil for browsers that don't support fetch natively
import getBaseUrl from './baseUrl';

const baseUrl = getBaseUrl();

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

// export one public function
export function getUsers() {
  return get('users');
}

export function deleteUser(id) {
  return del(`users/${id}`);
}

function get(url) {
  return fetch(baseUrl + url)
    .then(onSuccess, onError);
}

// can't call func delete since reserved word
function del(url) {
  const request = new Request(baseUrl + url, {
    method: 'DELETE'
  });

  return fetch(request)
    .then(onSuccess, onError);
}

function onSuccess(response) {
  return response.json();
}


function onError(error) {
  console.log(error); // eslint-disable-line no-console
}
