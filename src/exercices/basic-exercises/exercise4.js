const input = [
  {
    name: "Aquaman",
    studio: "DC",
    rating: "75%",
    date: "2018"
  },
  {
    name: "Avengers",
    studio: "Marvel",
    rating: "80%",
    date: "2012"
  },
  {
    name: "Thor",
    studio: "Marvel",
    rating: "40%",
    date: "2011"
  },
  {
    name: "Iron Man",
    studio: "Marvel",
    rating: "90%",
    date: "2008"
  }
];

const output = "70%";

// task is to write out the average percentage rating of just MARVEL movies in format 'number'%

const getMarvelMovies = movies =>
  movies.filter(movie => movie.studio === "Marvel");
const getScores = movies => movies.map(movie => parseInt(movie.rating));
const getAverage = movies =>
  movies.reduce((acc, curr) => acc + curr / movies.length, 0);
const decoratePercentage = avg => `${avg}%`;

const pipeline = [getMarvelMovies, getScores, getAverage, decoratePercentage];

const convert = input =>
  pipeline.reduce(
    (accumulator, currentValue) => currentValue(accumulator),
    input
  );

export default { input, output, convert };
