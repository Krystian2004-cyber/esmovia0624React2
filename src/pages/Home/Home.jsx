import { useState } from "react";
import "./Home.css";
import { useEffect } from "react";
import { bringMovies } from "../../services/api-calls";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (movies.length === 0) {
      const getMovies = async () => {
        bringMovies()
          .then((res) => {
            setMovies(res.results);
          })
          .catch((error) => console.log(error));
      };
      setTimeout(() => {
        getMovies();
      }, 2000);
    }

    console.log(movies);
  }, [movies]);

  return (
    <div className="home-design">
      {movies.length > 0 ? (
        //I have got the movies
        <div>
          {movies.map((movie) => {
            return <div key={movie.id}>{movie.title}</div>;
          })}
        </div>
      ) : (
        <div>LOADING.......</div>
      )}
    </div>
  );
}

export default Home;
