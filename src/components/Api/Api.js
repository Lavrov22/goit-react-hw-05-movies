import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '80be64ceb12333e0a159440079e36cd3';

export async function getTrendingToday () {
    const { data } = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
    console.log(data)
    return data.results;
}

export async function getMovies(query) {
    const { data } = await axios.get(`/search/movie?api_key=${API_KEY}&query=${query}`);
    return data;
}

export async function getMovieDetails(movieId) {
    const { data } = await axios.get(`/movie/${movieId}?api_key=${API_KEY}`);
    // console.log(data);
    return data;
}
