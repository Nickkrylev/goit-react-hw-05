import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const params = new URLSearchParams({
  api_key: '193a1318aa83a5b49d1c16448163261b',
});

export async function fetchMovies() {
  const response = await axios(`/trending/movie/day?${params}`);
  return response.data.results;
}

export async function fetchSearchMovies(search) {
  const response = await axios(`/search/movie?${params}&query=${search}`);
  return response.data.results;
}

export async function fetchMovieDescription(id) {
  const response = await axios(`/movie/${id}?${params}`);
  return response.data;
}

export async function fetchMovieCast(id) {
  const response = await axios(`/movie/${id}/credits?${params}`);
  return response.data.cast;
}

export async function fetchMovieReviews(id) {
  const response = await axios(`/movie/${id}/reviews?${params}`);
  return response.data.results;
}