export const input = [
  {
    country: "China",
    population: 1409517397
  },
  {
    country: "India",
    population: 1339180127
  },
  {
    country: "USA",
    population: 324459463
  },
  {
    country: "Indonesia",
    population: 263991379
  }
];

export const output = ["USA", "Indonesia"];

const isSmallCountry = countries =>
  countries.filter(country => country.population < 350000000);
const namesOfCountries = countries => countries.map(country => country.country);

const pipeline = [isSmallCountry, namesOfCountries];
const convert = input => pipeline.reduce((acc, curr) => curr(acc), input);

export default { input, output, convert };
