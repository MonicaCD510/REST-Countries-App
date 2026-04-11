const container = document.getElementById('countries-container');

console.log("js is running");

fetch("https://restcountries.com/v3.1/all?fields=name")
  .then(response => response.json())
  .then(data => {
    console.log(data);

    if (data && data.length > 0) {
      container.innerHTML = `<h2>${data[0].name.common}</h2>`;
    } else {
      container.innerHTML = "<p>No data found</p>";
    }
  })
  .catch(error => {
    console.log(error);
    container.innerHTML = "<p>Error loading data</p>";
  });