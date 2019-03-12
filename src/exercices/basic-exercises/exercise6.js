const input = [
  {
    name: "New Releases",
    videos: [
      {
        id: 70111470,
        title: "Die Hard",
        boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
        uri: "http://api.netflix.com/catalog/titles/movies/70111470",
        rating: 4.0,
        bookmark: []
      },
      {
        id: 654356453,
        title: "Bad Boys",
        boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
        uri: "http://api.netflix.com/catalog/titles/movies/70111470",
        rating: 5.0,
        bookmark: [{ id: 432534, time: 65876586 }]
      }
    ]
  },
  {
    name: "Dramas",
    videos: [
      {
        id: 65432445,
        title: "The Chamber",
        boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
        uri: "http://api.netflix.com/catalog/titles/movies/70111470",
        rating: 4.0,
        bookmark: []
      },
      {
        id: 675465,
        title: "Fracture",
        boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
        uri: "http://api.netflix.com/catalog/titles/movies/70111470",
        rating: 5.0,
        bookmark: [{ id: 432534, time: 65876586 }]
      }
    ]
  }
];
const output = {
  70111470: {
    title: "Die Hard",
    boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg"
  },
  654356453: {
    title: "Bad Boys",
    boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg"
  },
  65432445: {
    title: "The Chamber",
    boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg"
  },
  675465: {
    title: "Fracture",
    boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg"
  }
};

const getMovie = ({ id, title, boxart }) => ({
  [id]: { title, boxart }
});

const mapMovies = ({ videos }) => videos.map(getMovie);

const convert = movieLists =>
  movieLists.flatMap(mapMovies).reduce(
    (acc, currentValue) => ({
      ...acc,
      ...currentValue
    }),
    {}
  );

export default { input, output, convert };
