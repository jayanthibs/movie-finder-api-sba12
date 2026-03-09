import "dotenv/config";
import axios from "axios";

//creating json CLient to hold the base URL
const jsonClient = axios.create({
  baseURL: "http://www.omdbapi.com/",
});

//Axios request interceptors logging method and url
jsonClient.interceptors.request.use((request) => {
  console.log(`Requesting: ${request.method}  ${request.url}`);
  return request;
});

jsonClient.interceptors.response.use(
  (response) => {
    console.log("View the movies!");
    return response;
  },
  (error) => {
    console.error("Could not fetch movies.");
    return Promise.reject(error);
  },
);

const searchMovies = async (req, res) => {
  try {
    const { title } = req.query;

    // validation
    if (!title) {
      return res.status(400).json({
        error: "Title query parameter is required",
      });
    }
    // make a request to a external api
    const response = await jsonClient.get(
      `?s=${title}&apikey=${process.env.OMDB_API_KEY}`,
    );

    console.log(response.data);

    // keep only the properties and values we need
      const transformedData = response.data.Search.map((movie) =>({
      Title: movie.Title,
      Year: movie.Year,
      Type: movie.Type
      
      }));
    

    console.log(transformedData);

    res.send(transformedData);
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error("API Error:", error.response.status, error.response.data);
      res
        .status(error.response.status)
        .json({ message: "Error fetching data from external API." });
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error("Network Error:", error.message);
      res.status(500).json({ message: "A network error occurred." });
    }
  }
};

const getMovieDetails = async (req, res) => {
  try {

     const { id } = req.params;

    // validation
    if (!id) {
      return res.status(400).json({
        error: "Valid IMDb ID is required",
      });
    }

    
    // make a request to a external api
    const response = await jsonClient.get(
      `?i=${id}&apikey=${process.env.OMDB_API_KEY}`,
    );

    console.log(response.data);

   // keep only the properties and values we need
        const transformedData = {
      Title: response.data.Title,
      Year: response.data.Year,
      Genre: response.data.Genre,
      Director: response.data.Director,
      Actors: response.data.Actors,
      Language: response.data.Language
      }

    console.log(transformedData);

    res.send(transformedData);
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error("API Error:", error.response.status, error.response.data);
      res
        .status(error.response.status)
        .json({ message: "Error fetching data from external API." });
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error("Network Error:", error.message);
      res.status(500).json({ message: "A network error occurred." });
    }
  }
};

export {searchMovies, getMovieDetails};