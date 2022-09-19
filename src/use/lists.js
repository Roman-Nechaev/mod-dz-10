export const oneList = country => {
  const { population, capital, languages } = country;

  const lang = Object.values(languages);

  return `
     <div>
     <img src=${country.flags.svg}
      width="100">
            <span class= 'text-spam'><b> ${country.name.official}</b></span>
            <p><b>Capital</b>: ${capital} </p>
            <p><b>Population</b>: ${population}</p>
             
            <p><b>Languages</b>: ${lang}</p>

          </div>
    `;
};
