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
  fruits: [
    {
      id: 1,
      name: "orange"
    },
    {
      id: 2,
      name: "apple"
    }
  ],
  vegatable: [
    {
      id: 3,
      name: "carrot"
    }
  ]
};

const convert = inputCollection =>
  inputCollection.reduce(
    (accumulator, { id, name, category }) => ({
      ...accumulator,
      [category]: [...(accumulator[category] || []), { id, name }]
    }),
    {}
  );

export default { input, output, convert };
