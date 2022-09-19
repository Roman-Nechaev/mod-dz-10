const elementСontainer = document.querySelector('.country-info');
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { oneList } from '../use/country-list';
import { anyList } from '../use/any-countrys-lists';

function renderСountriesList(countrys) {
  console.log(countrys.length);
  const min = 2;
  const max = 10;

  ////////////? если больше 10 не отображаем
  if (countrys.length >= max) {
    clearInput();
    Notify.info('Too many matches found. Please enter a more specific name.');
  } ////////////? если больше 10 не отображаем
  else if (countrys.length >= min && countrys.length <= max) {
    //////////// !!отрисовка больше одной страницы
    const markup = countrys.map(country => anyList(country)).join('');
    //////////// !!отрисовка больше одной страницы
    elementСontainer.innerHTML = markup;
  } else if (countrys.length == 1) {
    //////////// !!отрисовка одной страницы
    const markup = countrys.map(country => oneList(country)).join('');
    //////////// !!отрисовка одной страницы
    elementСontainer.innerHTML = markup;
  }
}

function clearInput() {
  elementСontainer.innerHTML = '';
} //! очистка отрисоки при пустом инпуте

export default { renderСountriesList, clearInput };
