import { useParams } from "react-router-dom";
import { getMovieDetails } from "components/Api/Api";

export const MovieDetails = () => {
    const { id } = useParams();
    console.log(id);
    // getMovieDetails();
    return  <div>Фильмы</div>;
}