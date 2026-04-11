const container = document.getElementById('countries-container');
fetch("https://restcountries.com/v3.1/all?fields=name,flags")
  .then(response => response.json())
  .then(data => {
    console.log(data);

    container.innerHTML = "";

    data.forEach(country => {
      container.innerHTML += `
        <div>
         <img src="${country.flags.png}" width="100">
          <h2>${country.name.common}</h2>
        </div>
      `;
    });
  })
  .catch(error => {
    console.log(error);
    container.innerHTML = "<p>Error loading data</p>";
  });