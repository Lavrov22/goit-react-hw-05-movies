import { getCast } from "components/Api/Api";
import { Loader } from "components/Loader/Loader";
import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom"
import { List, Item, Img, Text } from "components/Cast/Cast.styled";




export const Cast = () => {
    const [cast, setCast] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { movieId } = useParams();
    const imgUrl = useRef('https://image.tmdb.org/t/p/w500');
    const imgUrlNotAvailable = useRef('https://upload.wikimedia.org/wikipedia/commons/2/2f/No-photo-m.png');

    useEffect(() => {
        setIsLoading(true);
        getCast(movieId).then(setCast).finally(() => setIsLoading(false));
    }, [movieId])

console.log(cast)

    return (
    <>
        {isLoading && <Loader />}
        <List>
            {cast.map(({id, profile_path, original_name, character}) => 
                <Item key={id}>
                    {profile_path ?
                        <Img src={`${imgUrl.current}${profile_path}`} alt={original_name} /> :
                        <Img src={imgUrlNotAvailable.current} style={{height: "300px"}} alt={original_name} />}
                    <Text>{original_name}</Text>
                    <Text>Character: {character }</Text>
            </Item>
            )}
            </List>
    </>
    );
}