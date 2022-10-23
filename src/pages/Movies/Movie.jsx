import { getMovies } from "components/Api/Api";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Link, Item, List, Button, Input} from "pages/Movies/Movie.styled";

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
                <Input
                    type="text"
                    name="serch"
                    autoComplete="off"
                    placeholder="Search movies" />
            <Button type="submit">Search</Button>
        </form>
        <List>
            {movies.map(({id, title}) =>
                <Item key={id}>
                    <Link to={`${id}`}>{title}</Link>
                </Item>)}
        </List>
        </>
    );
}