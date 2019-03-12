import exercices from ".";

test("exercise input equals output", () => {
  exercices.forEach(exercise => {
    expect(exercise.convert(exercise.input)).toEqual(exercise.output);
  });
});
