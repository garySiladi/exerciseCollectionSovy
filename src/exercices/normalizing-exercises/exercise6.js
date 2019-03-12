const input = [
  {
    country: "China",
    data: {
      continent: "Asia",
      population: 1409517397
    },
    GDP: "%5",
    activities: [
      { name: "economics", income: "2540000" },
      {
        name: "entertainment",
        income: "4270000"
      }
    ]
  },
  {
    country: "India",
    data: {
      continent: "Asia",
      population: 1339180127
    },
    GDP: "%4",
    activities: [
      { name: "economics", income: "5020000" },
      {
        name: "entertainment",
        income: "2110000"
      }
    ]
  },
  {
    country: "USA",
    data: {
      continent: "North America",
      population: 324459463
    },
    GDP: "%5",
    activities: [
      { name: "economics", income: "5750000" },
      {
        name: "entertainment",
        income: "42150000"
      }
    ]
  },
  {
    country: "Indonesia",
    data: {
      continent: "Oceania",
      population: 263991379
    },
    GDP: "%3",
    activities: [
      { name: "economics", income: "2000000" },
      {
        name: "entertainment",
        income: "790000"
      }
    ]
  },
  {
    country: "UK",
    data: {
      continent: "Europe",
      population: 150000000
    },
    GDP: "%3",
    activities: [
      { name: "economics", income: "4500000" },
      {
        name: "entertainment",
        income: "880000"
      }
    ]
  }
];

// task to count averages of activities of all ASIAN countries SEPARATELY

const output = {
  China: { average: 3405000 },
  India: { average: 3565000 }
};

const average = array => {
  return array.reduce((a, b) => a + b, 0) / array.length;
};

const convert = countryList => {
  return countryList
    .filter(country => country.data.continent === "Asia")
    .flatMap(({ country, activities }) => ({
      country,
      income: activities.map(item => parseInt(item.income))
    }))
    .reduce(
      (acc, { country, income }) => ({
        ...acc,
        [country]: {
          average: average(income)
        }
      }),
      {}
    );
};

export default { input, output, convert };
