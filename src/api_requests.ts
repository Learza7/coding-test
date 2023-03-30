import axios from "axios";
import { MovieSearchResult, MovieDetails } from "./types";

// we should not store API keys in the code
// but for the sake of simplicity we will do it here
// in a real project we should store it in a .env file
const API_KEY = "d37dede0";
const BASE_URL = "https://www.omdbapi.com/";

export const searchMovies = async (
  query: string
): Promise<MovieSearchResult[]> => {
  const response = await axios.get(BASE_URL, {
    params: {
      apikey: API_KEY,
      s: query,
    },
  });

  if (response.data.Response === "True") {
    return response.data.Search;
  } else {
    throw new Error(response.data.Error);
  }
};

export const getMovieDetails = async (
  imdbID: string
): Promise<MovieDetails> => {
  const response = await axios.get(BASE_URL, {
    params: {
      apikey: API_KEY,
      i: imdbID,
    },
  });

  if (response.data.Response === "True") {
    return response.data;
  } else {
    throw new Error(response.data.Error);
  }
};
