(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function appendCharacter(character) {
  var screen = document.getElementById('screen');
  screen.value += character;
}

function deleteLastCharacter() {
  var screen = document.getElementById('screen');
  screen.value = screen.value.slice(0, -1);
}

function clearScreen() {
  var screen = document.getElementById('screen');
  screen.value = '';
}

function calculateResult() {
  var screen = document.getElementById('screen');
  var result = eval(screen.value);
  screen.value = result;
}

function convertTemperature(fromUnit) {
  var temperatureInput = document.getElementById('temperatureInput');
  var temperature = parseFloat(temperatureInput.value);
  var convertedTemperature;

  if (fromUnit === 'C') {
      convertedTemperature = (temperature * 9 / 5) + 32;
  } else if (fromUnit === 'F') {
      convertedTemperature = (temperature - 32) * 5 / 9;
  }

  temperatureInput.value = convertedTemperature.toFixed(2);
}

async function getExchangeRate(base, currency) {
  try {
    const apiUrl = 'https://api.exchangerate-api.com/v4/latest/' + base;
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error('Ошибка получения данных. Код ошибки: ' + response.status);
    }

    const data = await response.json();
    return data.rates[currency];
  } catch (error) {
    console.error('Произошла ошибка:', error);
    throw error;
  }
}

  const rubToUsdButton = document.getElementById("rubToUsd");
  const rubToEurButton = document.getElementById("rubToEur");
  const usdToRubButton = document.getElementById("usdToRub");
  const usdToEurButton = document.getElementById("usdToEur");
  const eurToRubButton = document.getElementById("eurToRub");
  const eurToUsdButton = document.getElementById("eurToUsd");
  

async function convertCurrency(fromCurrency, toCurrency) {
  var currencyInput = document.getElementById('currencyInput');
  var amount = parseFloat(currencyInput.value);

  const result = await getExchangeRate(fromCurrency, toCurrency)

  currencyInput.value = result * amount;
}

rubToUsdButton.addEventListener("click", function() {
    convertCurrency("RUB", "USD");
  });

  rubToEurButton.addEventListener("click", function() {
    convertCurrency("RUB", "EUR");
  });

  usdToRubButton.addEventListener("click", function() {
    convertCurrency("USD", "RUB");
  });

  usdToEurButton.addEventListener("click", function() {
    convertCurrency("USD", "EUR");
  });

  eurToRubButton.addEventListener("click", function() {
    convertCurrency("EUR", "RUB");
  });

  eurToUsdButton.addEventListener("click", function() {
    convertCurrency("EUR", "USD");
  });

function convertMass(fromUnit, toUnit) {
  var massInput = document.getElementById('massInput');
  var mass = parseFloat(massInput.value);
  var convertedMass;

  if (fromUnit === 'g' && toUnit === 'kg') {
      convertedMass = mass / 1000;
  } else if (fromUnit === 'kg' && toUnit === 'g') {
      convertedMass = mass * 1000;
  }

  massInput.value = convertedMass.toFixed(2);
}
},{}]},{},[1]);
