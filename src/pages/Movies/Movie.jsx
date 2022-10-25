import { getMovies } from "components/Api/Api";
import { Loader } from "components/Loader/Loader";
import { useState, useEffect } from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import { Link, Item, List, Button, Input} from "pages/Movies/Movie.styled";

const Movie = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const [error, setError] = useState(null);
    const query = searchParams.get('query') ?? '';
    const location = useLocation();

    useEffect(() => {
        if (query === '') return;
        async function fetchMovies() {
            try {
                setIsLoading(true); 
                const {results} = await getMovies(query);
                setMovies(results);
            } catch (error) {
                setError(`Ничего не найдено по запросу ${query}`)
            } finally {
                setIsLoading(false);
            };
        
        }
        fetchMovies();
     
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
                <Input
                    type="text"
                    name="serch"
                    autoComplete="off"
                    placeholder="Search movies" />
            <Button type="submit">Search</Button>
            </form>
            {error && <div>{ error}</div>}
            {isLoading && <Loader />}
        <List>
            {movies.map(({id, title}) =>
                <Item key={id}>
                    <Link to={`${id}`} state={{from: location}}>{title}</Link>
                </Item>)}
        </List>
        </>
    );
}

export default Movie;