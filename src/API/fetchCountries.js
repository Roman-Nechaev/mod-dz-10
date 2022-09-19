const BASE_URL = 'https://restcountries.com';

function fetchCountries(name) {
  return fetch(`${BASE_URL}/v3.1/name/${name}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  });
}
export default { fetchCountries };
