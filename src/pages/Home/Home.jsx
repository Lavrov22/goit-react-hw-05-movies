import { getTrendingToday } from "components/Api/Api";
import { useState, useEffect } from "react";
import { Link, Item, List } from "pages/Home/Home.styled";

export const Home = () => {
    const [trending, setTrending] = useState([]);

    useEffect(() => {
        getTrendingToday().then(setTrending);
    }, []);
     
    return (
        <>
        <h2>Trending</h2>
        <List>
            {trending.map(({id, title}) =>
                <Item key={id}>
                    <Link to={`movies/${id}`}>{title}</Link>
                </Item>)}
        </List>
       </> 
    );
}