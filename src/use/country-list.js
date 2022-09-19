export const oneList = contry => {
  const { population, capital, languages } = contry;

  const lang = Object.values(languages);

  return `
     <div>
     <img src=${contry.flags.svg}
      width="100">
            <span class= 'text-spam'><b> ${contry.name.official}</b></span>
            <p><b>Capital</b>: ${capital} </p>
            <p><b>Population</b>: ${population}</p>
             
            <p><b>Languages</b>: ${lang}</p>

          </div>
    `;
};
