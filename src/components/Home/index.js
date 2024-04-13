import React, { Component } from "react";
import Header from "../Header";
import Movie from "../Movie";
import "./index.css";

class Home extends Component {
  state = {
    popularMovies: [],
    searchQuery: "",
    filteredMovies: [],
  };

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

  handleInputChange = (event) => {
    const query = event.target.value;
    this.setState({ searchQuery: query }, this.filterMovies);
  };

  filterMovies = () => {
    const { popularMovies, searchQuery } = this.state;
    const filteredMovies = popularMovies.filter((movie) =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    this.setState({ filteredMovies });
  };

  render() {
    const { popularMovies, searchQuery, filteredMovies } = this.state;
    const moviesToDisplay = searchQuery ? filteredMovies : popularMovies;

    return (
      <div className="movies-container">
        <Header handleInputChange={this.handleInputChange} />
        <div>
          <h1 className="main-heading">Movies</h1>
          <ul className="popular-movies">
            {moviesToDisplay.map((movie) => (
              <Movie key={movie.id} popularMovieDetails={movie} />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Home;
