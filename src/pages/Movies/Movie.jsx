import { getMovies } from "components/Api/Api";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export const Movie = () => {
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query') ?? '';

    useEffect(() => {
        if (query === '') return;
           
        getMovies(query).then(response => setMovies(response.results));
     
    }, [query]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const inputValue = form.elements.serch.value;
        setSearchParams(inputValue !== '' ? { query: inputValue } : {});
    }

    return (
        <>
        <form onSubmit={handleSubmit} >
            <input type="text" name="serch"/>
            <button type="submit">Search</button>
        </form>
        <ul>
            {movies.map(movie => <li key={movie.id}>{ movie.title}</li>)}
        </ul>
        </>
    );
}