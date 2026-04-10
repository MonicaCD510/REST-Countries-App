fetch("https://restcountries.com/v3.1/all")
  .then(res => res.json()) // convert response to json
  .then(data => {
    console.log(data);
  });

  const container = document.getElementById("countries-container");
console.log(container);

