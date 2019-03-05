const input1 = ["fruit", "vegetable", "other"];
const input2 = ["apple", "carrot"];

const output = [["fruit", "apple"], ["vegetable", "carrot"]];

const convert = ({ input1, input2 }) => {
  return input1.reduce((acc, currValue, index) => {
    if (!input2[index]) {
      return [...acc];
    }
    return [...acc, [currValue, input2[index]]];
  }, []);
};

export default { input: { input1, input2 }, output, convert };
