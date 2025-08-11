let Celsius = document.querySelector("#Celsius");
let Fahrenheit = document.querySelector("#Fahrenheit");
let showData = document.querySelector(".showData");

Celsius.addEventListener("input", (event) => {
  Fahrenheit.value = (event.target.value * 9) / 5 + 32;
  showData.innerHTML = `Celsius to Fahrenheit Convert is ${Fahrenheit.value}°`;
});

Fahrenheit.addEventListener("input", (event) => {
  Celsius.value = ((event.target.value - 32) * 5) / 9;
  showData.innerHTML = `Fahrenheit to Celsius Convert is ${Celsius.value}°`;
});
