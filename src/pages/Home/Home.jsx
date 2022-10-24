import { getTrendingToday } from "components/Api/Api";
import { Loader } from "components/Loader/Loader";
import { useState, useEffect } from "react";
import { Link, Item, List } from "pages/Home/Home.styled";

export const Home = () => {
    const [trending, setTrending] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        getTrendingToday().then(setTrending).finally(() => setIsLoading(false));
    }, []);
     
    return (
        <>
            <h2>Trending</h2>
            {isLoading && <Loader />}
            <List>
                {trending.map(({id, title}) =>
                    <Item key={id}>
                        <Link to={`movies/${id}`}>{title}</Link>
                    </Item>)}
            </List>
       </> 
    );
}