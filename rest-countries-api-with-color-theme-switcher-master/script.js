const container = document.getElementById('countries-container');
const regionFilter = document.getElementById('region-filter'); 
const searchInput = document.getElementById('search-input');
let allCountries = [];// Added
function displayCountries(data) {
  container.innerHTML = "";

  data.forEach(country => {
    container.innerHTML += `
      <div onclick="handleClick('${country.name.common}')">
        <img src="${country.flags.png}" width="100">
        <h2>${country.name.common}</h2>
        <p>Population: ${country.population}</p>
        <p>Region: ${country.region}</p>
      </div>
    `;
  });
}


function applyFilters() {
  const searchValue = searchInput.value.toLowerCase();
  const selectedRegion = regionFilter.value;

  let filteredCountries = allCountries;

  if (selectedRegion !== "") {
    filteredCountries = filteredCountries.filter(country => country.region === selectedRegion);
  }

  if (searchValue !== "") {
    filteredCountries = filteredCountries.filter(country =>
      country.name.common.toLowerCase().includes(searchValue)
    );
  }

  displayCountries(filteredCountries);
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
  regionFilter.addEventListener('change', () => {
    applyFilters();
  });
  const selectedRegion = regionFilter.value;

  if (selectedRegion === "") {
    displayCountries(allCountries);
  } else {
    const filteredCountries = allCountries.filter(country => country.region === selectedRegion);
    displayCountries(filteredCountries);
  }
;
searchInput.addEventListener('input', () => {
  applyFilters();
});
 
  
;

function handleClick(name) {
  console.log(name);
}