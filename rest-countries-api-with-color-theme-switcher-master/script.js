const container = document.getElementById('countries-container');
let allCountries = [];// Added
function displayCountries(data) {
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
}

fetch("https://restcountries.com/v3.1/all?fields=name,flags,population,region")
  .then(response => response.json())
  .then(data => {
  console.log(data);
  allCountries = data; // ADD THIS LINE
  displayCountries(data);
})
  .catch(error => {
    console.log(error);
    container.innerHTML = "<p>Error loading data</p>";
  });