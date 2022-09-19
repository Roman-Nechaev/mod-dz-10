import './css/styles.css';
import API from './API/fetchCountries';
import RENDER from './API/render';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
var _ = require('lodash');

const DEBOUNCE_DELAY = 300;

const input = document.querySelector('input#search-box');

input.addEventListener('input', _.debounce(onImput, DEBOUNCE_DELAY));

function onImput(e) {
  const form = e.target.value;
  if (form == '') {
    RENDER.clearInput();
  }

  API.fetchCountries(form.trim())
    .then(can => RENDER.renderСountriesList(can))
    .catch(error => Notify.failure('Oops, there is no country with that name'));
}
