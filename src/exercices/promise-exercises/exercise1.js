const collection = {
  steak: {
    count: 3,
    price: 6
  },
  pizza: {
    count: 0,
    price: 4
  },
  pepsi: {
    count: 0,
    price: 4
  }
};

export const orderFood = order => {
  return new Promise((resolve, reject) => {
    if (!collection[order]) {
      reject("we don't have that");
    }
    if (collection[order].count < 1) {
      reject(`we don't have ${order} in the kitchen`);
    }
    resolve(collection[order]);
  });
};
