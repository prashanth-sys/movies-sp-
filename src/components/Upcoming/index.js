import { Component } from "react";
import Header from "../Header";
import Movie from "../Movie";
import "./index.css";

class Home extends Component {
  state = { popularMovies: [] };

  componentDidMount() {
    this.getMovies();
  }

  getMovies = async () => {
    const apiUrl =
      "https://api.themoviedb.org/3/movie/popular?api_key=289268b566425706cee3bae927598191";
    const option = {
      method: "GET",
    };
    const response = await fetch(apiUrl, option);
    if (response.ok === true) {
      const fetchedData = await response.json();
      if (Array.isArray(fetchedData.results)) {
        const updatedData = fetchedData.results.map((movie) => ({
          id: movie.id,
          title: movie.title,
          originalTitle: movie.original_title,
          posterPath: movie.poster_path,
          overview: movie.overview,
          popularity: movie.popularity,
          originalLanguage: movie.original_language,
          voteAverage: movie.vote_average,
          voteCount: movie.vote_count,
        }));
        this.setState({ popularMovies: updatedData });
      } else {
        console.error("Fetched data is not in the expected format");
      }
    }
  };

  render() {
    const { popularMovies } = this.state;
    return (
      <div className="movies-container">
        <Header />
        <div>
          <h1 className="main-heading">Upcoming Movies</h1>
          <p className="movies-type">This are the Upcoming Movies</p>
          <ul className="popular-movies">
            {popularMovies.map((movie) => (
              <Movie key={movie.id} popularMovieDetails={movie} />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
export default Home;
