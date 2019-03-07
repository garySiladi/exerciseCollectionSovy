import { orderFood } from "./exercise1";

test("resolve correct kitchen promise", () => {
  return expect(orderFood("steak")).resolves.toEqual({
    count: 3,
    price: 6
  });
});
test("reject correct kitchen promise with pizza", () => {
  return expect(orderFood("pizza")).rejects.toBe(
    "we don't have pizza in the kitchen"
  );
});
test("reject correct kitchen promise with pepsi", () => {
  return expect(orderFood("pepsi")).rejects.toBe(
    "we don't have pepsi in the kitchen"
  );
});
test("reject correct kitchen promise", () => {
  return expect(orderFood("pizz")).rejects.toBe("we don't have that");
});
