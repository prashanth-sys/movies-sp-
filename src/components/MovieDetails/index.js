import { Link } from "react-router-dom";
import { Component } from "react";
import Loader from "react-loader-spinner";
import Header from "../Header";
import "./index.css";

class MovieDetails extends Component {
  state = { movieDetails: [], isShow: true };
  componentDidMount() {
    this.getMovieDetails();
  }

  getMovieDetails = async () => {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    console.log(id);
    const apiUrls = `https://api.themoviedb.org/3/movie/${id}?api_key=289268b566425706cee3bae927598191`;
    const option = {
      method: "GET",
    };
    const response = await fetch(apiUrls, option);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      const updatedData = {
        id: data.id,
        homePage: data.homepage,
        originalLanguage: data.original_language,
        originalTitle: data.original_title,
        overview: data.overview,
        posterPath: data.poster_path,
        runtime: data.runtime,
        revenue: data.revenue,
        releaseDate: data.release_date,
        voteAverage: data.vote_average,
        voteCount: data.vote_count,
        budget: data.budget,
        popularity: data.popularity,
      };
      this.setState({ movieDetails: updatedData, isShow: false });
    }
  };

  movieDetailsRender = () => {
    const { movieDetails } = this.state;
    const {
      overview,
      originalTitle,
      posterPath,
      releaseDate,
      revenue,
      runtime,
      originalLanguage,
      voteAverage,
      voteCount,
      budget,
      popularity,
    } = movieDetails;
    const posterUrl = `https://image.tmdb.org/t/p/w500/${posterPath}`;

    return (
      <div className="movie-details-container">
        <img src={posterUrl} alt="shiva" className="home-page" />
        <h1 className="title">{originalTitle}</h1>
        <p className="over-view">{overview}</p>
        <p className="details">Release Date : {releaseDate}</p>
        <p className="details">Revenue : {revenue}</p>
        <p className="details">Runtime : {runtime}</p>
        <p className="details">Language : {originalLanguage}</p>
        <p className="details">Average : {voteAverage}</p>
        <p className="details">vote Count : {voteCount}</p>
        <p className="details">Budget : {budget}</p>
        <p className="details">Popularity : {popularity}</p>
        <Link to="/" className="link">
          <button className="back-button" type="button">
            Know More
          </button>
        </Link>
      </div>
    );
  };

  loaderRender = () => {
    return (
      <div className="loader-container">
        <div className="products-details-loader-container" data-testid="loader">
          <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
        </div>
      </div>
    );
  };

  render() {
    const { isShow } = this.state;
    return (
      <div className="movie-container">
        <Header />
        {isShow ? this.loaderRender() : this.movieDetailsRender()}
      </div>
    );
  }
}
export default MovieDetails;
