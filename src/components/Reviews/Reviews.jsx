import { getReviews } from "components/Api/Api";
import { Loader } from "components/Loader/Loader";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { List, Text } from "components/Reviews/Reviews.styled";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { movieId } = useParams();
    
    useEffect(() => {
        async function fetcReviews() {
            try {
                setIsLoading(true);
                const response = await getReviews(movieId);
                setReviews(response);
                } catch (error) {
                
                }finally {
                setIsLoading(false);
            };
        }
    fetcReviews();

    }, [movieId])

    return (
        <>
            {isLoading && <Loader />}
            <List>
                {reviews.length === 0
                    ? <Text>We don't have any reviews for this movie</Text>
                    : reviews.map(({id, author, content}) =>
                        <li key={id}>
                        <h3>Author: {author }</h3>
                        <Text>{ content}</Text>
                        </li>)}
            </List>
        </>
    );
}

export default Reviews;