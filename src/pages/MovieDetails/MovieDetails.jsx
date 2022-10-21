import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import { getMovieDetails } from "components/Api/Api";


export const MovieDetails = () => {
    const [movies, setMovies] = useState({});
    const [genres, setGenres] = useState([]);
    const [poster, setPoster] = useState('');
    const {movieId} = useParams();
   
    useEffect(() => {
        getMovieDetails(movieId).then(response => {
            setMovies(response);
            setGenres(response.genres);
            setPoster(`https://image.tmdb.org/t/p/w500${response.poster_path}`);
        });
    }, [movieId])
    console.log(movies);


    return (
        <>
            
            <img src={poster} alt="" />
            <h1>{movies.title} ({ movies.release_date})</h1>
            <p>User Score: {Math.round(movies.vote_average*10)} </p>
            <h2>overview</h2>
            <p>{movies.overview }</p>
            <h2>genres</h2>
            <ul>
                {genres.map(genre => <li key={genre.id}>{genre.name }</li>)}
            </ul>
        </>
    );
}