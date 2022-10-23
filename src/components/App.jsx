import { Routes, Route } from "react-router-dom";
import { Home } from "pages/Home/Home";
import { Movie } from "pages/Movies/Movie";
import { MovieDetails } from "pages/MovieDetails/MovieDetails";
import { Cast } from "components/Cast/Cast";
import { Link, Header, Section } from "components/App.styled";





export const App = () => {
  return (
    <Section>
      <Header>
        <Link to="/" end>Home</Link>
        <Link to="/movies">Movies</Link>
      </Header>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/movies' element={<Movie />}></Route>
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast/>}></Route>
        </Route>
    </Routes>
    </Section>
  );
};
