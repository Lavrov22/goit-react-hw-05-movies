import { Routes, Route, NavLink } from "react-router-dom";
import { Home } from "pages/Home/Home";
import { Movie } from "pages/Movies/Movie";
import { MovieDetails } from "pages/MovieDetails/MovieDetails";




export const App = () => {
  return (
    <section>
      <header>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </header>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/movies' element={<Movie/>}>    
          <Route path=":movieId" element={<MovieDetails />}></Route>
        </Route>  
    </Routes>
    </section>
  );
};
