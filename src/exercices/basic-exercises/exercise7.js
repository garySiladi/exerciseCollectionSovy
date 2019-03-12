const input = [
  {
    name: "new releases",
    videos: [
      {
        id: 70111470,
        title: "Die Hard",
        rating: 5.0
      },
      {
        id: 654356453,
        title: "Bad Boys",
        rating: 4.0
      }
    ]
  },
  {
    name: "dramas",
    videos: [
      {
        id: 65432445,
        title: "The Chamber",
        rating: 5.0
      },
      {
        id: 675465,
        title: "Fracture",
        rating: 4.0
      }
    ]
  }
];

const output = {
  70111470: {
    movielist: "new releases",
    title: "Die Hard"
  },
  65432445: {
    movielist: "dramas",
    title: "The Chamber"
  }
};

const getMovie = ({ name: movielist }) => ({ id, title }) => ({
  [id]: {
    movielist,
    title
  }
});

const convert = movieLists => {
  const preparedArray = movieLists.flatMap(movieList =>
    movieList.videos
      .filter(movie => movie.rating === 5.0)
      .map(getMovie(movieList))
  );

  return preparedArray.reduce((acc, current) => {
    return {
      ...acc,
      ...current
    };
  }, {});
};

export default { input, output, convert };
