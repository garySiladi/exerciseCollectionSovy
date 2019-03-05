const input = [
  {
    country: "China",
    population: 1409517397,
    GDP: "%5",
    activities: [
      { name: "Trading", income: "2540000" },
      {
        name: "Entertainment",
        income: "4270000"
      }
    ]
  },
  {
    country: "India",
    population: 1339180127,
    GDP: "%3",
    activities: [
      { name: "Trading", income: "5020000" },
      {
        name: "Entertainment",
        income: "2110000"
      }
    ]
  },
  {
    country: "USA",
    population: 324459463,
    GDP: "%5",
    activities: [
      { name: "Trading", income: "5750000" },
      {
        name: "Entertainment",
        income: "42150000"
      }
    ]
  },
  {
    country: "Indonesia",
    population: 263991379,
    GDP: "%3",
    activities: [
      { name: "Trading", income: "2000000" },
      {
        name: "Entertainment",
        income: "790000"
      }
    ]
  },
  {
    country: "UK",
    population: 150000000,
    GDP: "%2",
    activities: [
      { name: "Trading", income: "4500000" },
      {
        name: "Entertainment",
        income: "880000"
      }
    ]
  }
];

// task to group country TRADING incomes by GDP rate

const output = {
  "%2": { Trading: "4500000" },
  "%3": { Trading: "7020000" },
  "%5": { Trading: "8290000" }
};

const findTrading = input => input.find(act => act.name === "Trading");

const convert = countryList => {
  return countryList
    .map(country => {
      return { GDP: country.GDP, trading: findTrading(country.activities) };
    })
    .reduce((acc, curr) => {
      if (!acc[curr.GDP]) {
        acc[curr.GDP] = {};
      }
      return {
        ...acc,
        [curr.GDP]: {
          Trading: JSON.stringify(
            parseInt(curr.trading.income) +
              (parseInt(acc[curr.GDP]["Trading"]) || 0)
          )
        }
      };
    }, {});
};

export default { input, output, convert };
