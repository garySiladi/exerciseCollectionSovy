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
  entities: {
    1: {
      id: 1,
      name: "orange"
    },
    2: { id: 2, name: "carrot" }
  },
  result: [1, 2]
};

const convert = vstup =>
  vstup
    .flatMap(item => item.list)
    .reduce(
      (acc, currVal) => {
        return {
          entities: { ...acc.entities, [currVal.id]: currVal },
          result: [...acc.result, currVal.id]
        };
      },
      { entities: {}, result: [] }
    );

export default { input, output, convert };
