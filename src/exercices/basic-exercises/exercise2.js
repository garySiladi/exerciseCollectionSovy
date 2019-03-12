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

const output = ["fruits", "vegatable"];

const convert = inputCollection =>
  inputCollection.reduce((acc, curr) => {
    if (!acc.includes(curr.category)) {
      return [...acc, curr.category];
    }
    return acc;
  }, []);

export default { input, output, convert };
