import './css/styles.css';

const DEBOUNCE_DELAY = 300;
var _ = require('lodash');
import API from './API/fetchCountries';

const input = document.querySelector('input');

input.addEventListener('input', onImput);

function onImput(e) {
  const form = e.currentTarget.value;
  console.log(form);
  API.fetchCountries(form);
}

_.debounce(function foo(params) {
  console.log('re');
}, 1000);
