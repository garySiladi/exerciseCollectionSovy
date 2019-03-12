const input = [
  {
    name: "fruits",
    list: [
      {
        id: 1,
        name: "orange"
      }
    ]
  },
  {
    name: "vegatable",
    list: [{ id: 2, name: "carrot" }]
  }
];

const output = {
  1: "orange",
  2: "carrot"
};

const convert = input =>
  input
    .flatMap(item => item.list)
    .reduce((acc, curr) => ({ ...acc, [curr.id]: curr.name }), {});

export default { input, output, convert };
