import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { Navigation } from "./common/Navigation";
import MovieList from "./features/MovieList";
import { MovieDetails } from "./features/MovieDetails/index";

function App() {
  return (
    <>
      <HashRouter>
        <Navigation toMovies={"/movies"} toPeople={"/people"} />
        <Switch>
          <Route path="/movies/:id">
            <MovieDetails />
          </Route>
          <Route path="/people"></Route>
          <Route path="/movies">
            <MovieList />
          </Route>
          <Route patch="/">
            <Redirect to="/movies" />
          </Route>
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
