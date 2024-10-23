import { useState } from "react";
import tempMovieData from "./tempMovieData";
import NavBar from "./NavBar";
import MovieList from "./MovieList";
import WatchedMovies from "./WatchedMovies";




export default function App() {
  const [movies, setMovies] = useState(tempMovieData);

 

 

  return (
    <>
      <NavBar />

      <main className="main">
        <MovieList />
      <WatchedMovies/>
      </main>
    </>
  );
}
