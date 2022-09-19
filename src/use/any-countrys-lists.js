export const anyList = country => {
  return `
    <div>
  <p><img src=${country.flags.svg} width="40" align="middle" /><b>
${country.name.official}<b/></p>
                 </div>
    `;
};
