import { Outlet, useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import { getMovieDetails } from "components/Api/Api";
import { Loader } from "components/Loader/Loader";
import { Wrapper, Img, Item, List, InformList, InformWrapper, InformLink, InformItem } from "pages/MovieDetails/MovieDetails.styled";


export const MovieDetails = () => {
    const [movies, setMovies] = useState({});
    const [genres, setGenres] = useState([]);
    const [poster, setPoster] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const {movieId} = useParams();
   
    useEffect(() => {
        setIsLoading(true);
        getMovieDetails(movieId)
            .then(response => {
            setMovies(response);
            setGenres(response.genres);
            setPoster(`https://image.tmdb.org/t/p/w500${response.poster_path}`);
        }).finally(() => setIsLoading(false));
    }, [movieId])

    const sliceDate = () => {
        if (!movies.release_date) return;
        return movies.release_date.slice(0, 4);
    }

    const userScrorePercentage = () => {
        return Math.round(movies.vote_average * 10);
    }


    return (
        <>
            {isLoading ? <Loader /> : 
            <>
                <Wrapper>
                    <div>
                        <Img src={poster} alt="" />
                    </div>
                    <div>
                        <h1>{movies.title} ({sliceDate()})</h1>
                        <p>User Score: {userScrorePercentage()}% </p>
                        <h2>Overview</h2>
                        <p>{movies.overview }</p>
                        <h2>Genres</h2>
                        <List>
                            {genres.map(({id, name}) => <Item key={id}>{name }</Item>)}
                            </List>
                    </div>
                </Wrapper>
                <InformWrapper>
                    <h2>Additional information</h2>
                    <InformList>
                        <InformItem><InformLink to="cast">Cast</InformLink></InformItem>
                        <InformItem><InformLink to="reviews">Reviews</InformLink></InformItem>   
                    </InformList>
                </InformWrapper>
                <Outlet />
            </>}
            
        </>
    );
}