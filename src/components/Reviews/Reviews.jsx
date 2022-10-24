import { getReviews } from "components/Api/Api";
import { Loader } from "components/Loader/Loader";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { List, Text } from "components/Reviews/Reviews.styled";

export const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { movieId } = useParams();
    
    useEffect(() => {
        setIsLoading(true);
        getReviews(movieId).then(setReviews).finally(() => setIsLoading(false));
    }, [movieId])

    return (
        <>
            {isLoading && <Loader />}
            <List>
                {reviews.length === 0
                    ? <Text>We don't have any reviews for this movie</Text>
                    : reviews.map(review =>
                        <li key={review.id}>
                        <h3>Author: {review.author }</h3>
                        <Text>{ review.content}</Text>
                        </li>)}
            </List>
        </>
    );
}