import { Link } from "react-router-dom";
import "./index.css";

const Movie = (props) => {
  const { popularMovieDetails } = props;
  const { title, posterPath, id, popularity } = popularMovieDetails;
  return (
    <li>
      <Link to={`/movie/${id}`} className="link">
        <div className="list-container">
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500/${posterPath}`}
              alt="movie"
              className="image"
            />
          </div>
          <div>
            <h1 className="movie-name">{title}</h1>
            <p className="popularity">{popularity}</p>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default Movie;
