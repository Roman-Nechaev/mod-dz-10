const elementСontainer = document.querySelector('.country-info');
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { oneList } from '../use/list';
// function renderСountriesList(countrys) {

//   const min = 2;
//   const max = 10;
//   if (countrys.length >= max) {
//     clearInput();
//     Notify.info('Too many matches found. Please enter a more specific name.');
//   } else if (countrys.length >= min && countrys.length <= max) {
//     clearInput();
//     console.log('от 2 до 10');
//     const markup = countrys
//       .map(country => {
//         return `
//      <div>

//      <p><img src=${country.flags.svg} width="40" align="middle" /><b>
// ${country.name.official}<b/></p>
//                  </div>
//     `;
//       })
//       .join('');
//     elementСontainer.innerHTML = markup;
//   } else if (countrys.length == 1) {
//     console.log('один');
//     clearInput();

//     //////////////////////////
//     const markup = countrys
//       .map(country => {
//         return `
//      <div>
//      <img src=${country.flags.svg}
//       width="100"
//      >
//             <span class= 'text-spam'><b> ${country.name.official}</b></span>
//             <p><b>Capital</b>: ${country.capital} </p>
//             <p><b>Population</b>: ${country.population}</p>

//             <p><b>Languages</b>: ${countrys.languages}</p>

//           </div>
//     `;
//       })
//       .join('');
//     elementСontainer.innerHTML = markup;
//   }

//   console.log('countrys:', countrys.length);
// } //! отрисовка поисковых карточек

function renderСountriesList(countrys) {
  const marke = countrys.map(country => oneList(country)).join('');
  console.log(marke);
  elementСontainer.innerHTML = marke;
}

function clearInput() {
  elementСontainer.innerHTML = '';
} //! очистка отрисоки при пустом инпуте

export default { renderСountriesList, clearInput };
