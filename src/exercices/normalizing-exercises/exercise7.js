const input = {
  fruits: [{ name: "orange" }, { name: "apple" }],
  vegetables: [{ name: "carrot" }, { name: "onion" }]
};

const output = [
  {
    category: "fruits",
    name: "orange"
  },
  {
    category: "fruits",
    name: "apple"
  },
  {
    category: "vegetables",
    name: "carrot"
  },
  {
    category: "vegetables",
    name: "onion"
  }
];
//hint
// Object.keys(obj) – returns an array of keys.
// Object.values(obj) – returns an array of values.
// Object.entries(obj) – returns an array of[key, value] pairs.

const convert = data => {
  return Object.entries(data).flatMap(([category, items]) => {
    return items.map(({ name }) => {
      return {
        category,
        name
      };
    });
  });
};

export default { input, output, convert };
