import { getTrendingToday } from "components/Api/Api";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export const Home = () => {
    const [trending, setTrending] = useState([]);

    useEffect(() => {
        getTrendingToday().then(setTrending);
    }, []);
     
    return (
        <>
        <h2>Trending</h2>
        <ul>
                {trending.map(trend => <li key={trend.id}><NavLink to={`movies/${trend.id}`}>{ trend.title}</NavLink></li>)}
        </ul>
       </> 
    );
}