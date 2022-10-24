import { getMovies } from "components/Api/Api";
import { Loader } from "components/Loader/Loader";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Link, Item, List, Button, Input} from "pages/Movies/Movie.styled";

export const Movie = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query') ?? '';

    useEffect(() => {
        if (query === '') return;
        setIsLoading(true);   
        getMovies(query).then(response => setMovies(response.results)).finally(() => setIsLoading(false));
     
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
            {isLoading && <Loader />}
        <List>
            {movies.map(({id, title}) =>
                <Item key={id}>
                    <Link to={`${id}`}>{title}</Link>
                </Item>)}
        </List>
        </>
    );
}