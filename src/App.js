// App.js
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import MovieDetails from "./components/MovieDetails";
import TopMovies from "./components/TopMovies";
import PopularMovies from "./components/PopularMovies";
import Upcoming from "./components/Upcoming";
import "./App.css";

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/movie/:id" component={MovieDetails} />
    <Route exact path="/top/rated" component={TopMovies} />
    <Route exact path="/popular/movies" component={PopularMovies} />
    <Route exact path="/upcoming" component={Upcoming} />
  </Switch>
);
export default App;
