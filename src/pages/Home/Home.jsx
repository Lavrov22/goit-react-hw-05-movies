import { getTrendingToday } from "components/Api/Api";
import { Loader } from "components/Loader/Loader";
import { useState, useEffect } from "react";
import { Link, Item, List } from "pages/Home/Home.styled";
import { useLocation } from "react-router-dom";

const Home = () => {
    const [trending, setTrending] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const location = useLocation();

    useEffect(() => {

        async function fetcMovies() {
            try {
                setIsLoading(true);
                const response = await getTrendingToday();
                setTrending(response);
            } catch (error) {
                
            }finally {
                setIsLoading(false);
            };
        }
        fetcMovies();
    }, []);
     
    return (
        <>
            <h2>Trending</h2>
            {isLoading && <Loader />}
            <List>
                {trending.map(({id, title}) =>
                    <Item key={id}>
                        <Link to={`movies/${id}`} state={{ from: location }}>{title}</Link>
                    </Item>)}
            </List>
       </> 
    );
}

export default Home;