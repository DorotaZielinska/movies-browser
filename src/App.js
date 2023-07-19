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
          <Route path="/movies/:id" component={MovieDetails} />
          <Route path="/people"></Route>
          <Route path="/movies" component={MovieList} />
          <Route patch="/">
            <Redirect to="/movies" />
          </Route>
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
