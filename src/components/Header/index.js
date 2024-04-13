import { Link } from "react-router-dom";
import "./index.css";

const Header = ({ handleInputChange }) => (
  <nav className="nav-container">
    <h1 className="movie-logo">MovieDb</h1>
    <ul className="nav-list-container">
      <Link to="/" className="link">
        <li className="list">Home</li>
      </Link>
      <Link to="/popular/movies" className="link">
        <li className="list">Popular</li>
      </Link>
      <Link to="/top/rated" className="link">
        <li className="list">Top Rated</li>
      </Link>
      <Link to="/upcoming" className="link">
        <li className="list">Upcoming</li>
      </Link>
    </ul>
    <input
      type="text"
      className="input"
      placeholder="Movie Search"
      onChange={handleInputChange}
    />
    <button className="search-button" type="button">
      Search
    </button>
  </nav>
);
export default Header;
