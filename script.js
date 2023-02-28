

fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
//Get all the countries from the Asia continent /region using the Filter function

    const asiaCountries = data.filter(country => country.region === 'Asia');
    console.log('Asia Countries:', asiaCountries);

//Get all the countries with a population of less than 2 lakhs using Filter function

    const smallPopulationCountries = data.filter(country => country.population < 200000);
    console.log('Countries with population less than 2 lakhs:', smallPopulationCountries);

//Print the following details name, capital, flag using forEach function,

    data.forEach(country => {
      console.log(`Name: ${country.name.common}, Capital: ${country.capital[0]}, Flag: ${country.flags.png}`);
    });


//Print the total population of countries using reduce function

    const totalPopulation = data.reduce((total, country) => total + country.population, 0);
    console.log('Total population:', totalPopulation);
    
//Print the country which uses US Dollars as currency.

    const usdCountries = data.filter(country => country.currencies.USD);
    console.log('Countries using USD:', usdCountries);
  })
  .catch(error => console.log(error));
