import { Component } from "react";
import "./index.css";

class MovieDetails extends Component {
  componentDidMount() {
    this.getMovieDetails();
  }

  getMovieDetails = () => {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    console.log(id);
    // Perform API request using the movie ID to fetch movie details
  };

  render() {
    return (
      <div>
        <h1>hi</h1>
      </div>
    );
  }
}
export default MovieDetails;
