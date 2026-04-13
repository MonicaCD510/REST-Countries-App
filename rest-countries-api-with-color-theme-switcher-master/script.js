function displayCountries(data) {
  displayCountries(data);

  {
    container.innerHTML += `
      <div>
        <img src="${country.flags.png}" width="100">
        <h2>${country.name.common}</h2>
        <p>Population: ${country.population}</p>
        <p>Region: ${country.region}</p>
    </div>
    `;
  };
}
const container = document.getElementById('countries-container');
fetch("https://restcountries.com/v3.1/all?fields=name,flags,population,region")
  .then(response => response.json())
  .then(data => {
    console.log(data);

    container.innerHTML = "";

    data.forEach(country => {
      container.innerHTML += `
        <div>
         <img src="${country.flags.png}" width="100">
          <h2>${country.name.common}</h2>
          <p>Population: ${country.population}</p>
          <p>Region: ${country.region}</p>
        </div>
      `;
    });
  })
  .catch(error => {
    console.log(error);
    container.innerHTML = "<p>Error loading data</p>";
  });