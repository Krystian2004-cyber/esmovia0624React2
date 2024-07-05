import { useState, useEffect, useContext } from "react";
import { bringMovies } from "../../services/api-calls";
import { myContext } from "../../app/context";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const [movies, setMovies] = useState([]);
  const {state, SetAuth} = useContext(myContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (movies.length === 0) {
      const getMovies = async () => {
        bringMovies()
          .then((res) => {
            setMovies(res.results);
          })
          .catch((error) => console.log(error));
      };
        getMovies();
    }

    console.log(movies);
  }, [movies]);

  useEffect(()=>{
    console.log(state)
  }, [state])

  const selectMovie = (movie) => {
    SetAuth("movie", movie)
    navigate("/moviedetail")
  }

  return (
    <div className="home-design">
      {movies.length > 0 ? (
        //I have got the movies
        <div>
          {movies.map((movie) => {
            return <div onClick={()=>selectMovie(movie)} key={movie.id}>{movie.title}</div>;
          })}
        </div>
      ) : (
        <div>LOADING.......</div>
      )}
    </div>
  );
}

export default Home;
