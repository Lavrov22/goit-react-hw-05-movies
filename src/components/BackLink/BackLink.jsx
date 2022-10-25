import { Link } from "components/BackLink/BackLink.styled";
import { useLocation } from "react-router-dom";
import { IoArrowBackCircle } from "react-icons/io5";

export const BackLink = () => {
    const location = useLocation();
    const backLink = location.state?.from ?? "/";

    return (
    <>
        <Link to={backLink}><IoArrowBackCircle /> Go back</Link>
    </>
    );
}