const input = [
  {
    id: 1,
    name: "orange",
    category: "fruits"
  },
  {
    id: 2,
    name: "apple",
    category: "fruits"
  },
  {
    id: 3,
    name: "carrot",
    category: "vegatable"
  }
];

const output = {
  fruits: 2,
  vegatable: 1
};

const convert = input =>
  input.reduce((acc, curr) => {
    if (!acc[curr.category]) {
      return { ...acc, [curr.category]: 1 };
    }
    return { ...acc, [curr.category]: acc[curr.category] + 1 };
  }, {});

export default { input, output, convert };
