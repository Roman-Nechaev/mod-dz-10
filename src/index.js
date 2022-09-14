import './css/styles.css';
import API from './API/fetchCountries';

var _ = require('lodash');

const DEBOUNCE_DELAY = 300;

const elementСontainer = document.querySelector('.country-info');
const input = document.querySelector('input#search-box');

input.addEventListener('input', _.debounce(onImput, DEBOUNCE_DELAY));

function onImput(e) {
  console.log('form');

  const form = e.target.value;
  API.fetchCountries(form)
    .then(can => renderСountriesList(can))
    .catch(error => console.log(error));
}

function renderСountriesList(countrys) {
  const markup = countrys
    .map(country => {
      return `
     <div>
     <img src=${country.flags.svg}
      width="100"
     height="100">
            <p><b>Country</b>: ${country.name.official}</p>
            <p><b>Capital</b>: ${country.capital}</p>
            <p><b>Population</b>: ${country.population}</p>
            <p><b>Languages</b>: ${country.languages}</p>

          </div>
    `;
    })
    .join('');
  elementСontainer.innerHTML = markup;
}
