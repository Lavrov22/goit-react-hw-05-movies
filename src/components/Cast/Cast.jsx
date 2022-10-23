import { getCast } from "components/Api/Api";
import { useParams } from "react-router-dom"

export const Cast = () => {
    const { movieId } = useParams();
    console.log(movieId);
    getCast(movieId);

    return (
        <div>cast</div>
    );
}