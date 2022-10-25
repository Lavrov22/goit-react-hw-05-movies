import { Routes, Route } from "react-router-dom";
import { lazy } from "react";

const Layout = lazy(() => import("components/Layout/Layout"));
const Home = lazy(() => import("pages/Home/Home"));
const Movie = lazy(() => import("pages/Movies/Movie"));
const MovieDetails = lazy(() => import("pages/MovieDetails/MovieDetails"));
const Cast = lazy(() => import("components/Cast/Cast"));
const Reviews = lazy(() => import("components/Reviews/Reviews"));



export const App = () => {
  return (
 
    <Routes>
      <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path='/movies' element={<Movie />}></Route>
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />}></Route>
            <Route path="reviews" element={<Reviews/>}></Route>
          </Route>
          <Route path="*" element={<div>Not Found</div>} />
        </Route>
    </Routes>
  );
};
