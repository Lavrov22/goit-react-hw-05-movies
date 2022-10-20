import { getMovies } from "components/Api/Api";
import { useState, useEffect } from "react";

export const Movie = () => {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    const handleChange = (e) => {
        setQuery(e.target.value);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        getMovies(query).then(setMovies);
       
    }
   
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={query} onChange={handleChange}/>
            <button type="submit">Search</button>
       </form>
    );
}