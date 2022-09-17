import './css/styles.css';
import API from './API/fetchCountries';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
var _ = require('lodash');

const DEBOUNCE_DELAY = 300;

const elementСontainer = document.querySelector('.country-info');
const input = document.querySelector('input#search-box');

input.addEventListener('input', _.debounce(onImput, DEBOUNCE_DELAY));

function onImput(e) {
  const form = e.target.value;
  if (form == '') {
    clearInput();
  }

  // const form = e.target.value;
  API.fetchCountries(form.trim())
    .then(can => renderСountriesList(can))
    .catch(error => console.log(error));
}

function renderСountriesList(countrys) {
  const min = 2;
  const max = 10;
  if (countrys.length >= max) {
    clearInput();
    Notify.info('Too many matches found. Please enter a more specific name.');
  } else if (countrys.length >= min && countrys.length <= max) {
    clearInput();
    console.log('от 2 до 10');
    const markup = countrys
      .map(country => {
        return `
     <div>
     <img src=${country.flags.svg}
      width="30"
     height="50">
      <p> <b>${country.name.official}</b></p> 
            
          </div>
    `;
      })
      .join('');
    elementСontainer.innerHTML = markup;
  } else if (countrys.length == 1) {
    console.log('один');
    clearInput();
    //////////////////////////
    const markup = countrys
      .map(country => {
        return `
     <div>
     <img src=${country.flags.svg}
      width="100"
     height="100">
            <p><b> ${country.name.official}</b></p>
            <p><b>Capital</b>: ${country.capital}</p>
            <p><b>Population</b>: ${country.population}</p>
             
            <p><b>Languages</b>: ${country.languages}</p>

          </div>
    `;
      })
      .join('');
    elementСontainer.innerHTML = markup;
  }
  console.log('countrys:', countrys.length);
} //! отрисовка поисковых карточек

function clearInput() {
  elementСontainer.innerHTML = '';
} //! очистка отрисоки при пустом инпуте
