import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { Navigation } from "./common/Navigation";
import MovieList from "./features/MovieList";
import { PeopleLists } from "./features/PeopleList";
import { MovieDetails } from "./features/MovieDetails/index";
import { PeopleDetails } from "./features/PeopleDetails";

function App() {
  return (
    <>
      <HashRouter>
        <Navigation toMovies={"/movies"} toPeople={"/people"} />
        <Switch>
          <Route path="/movies/:id" component={MovieDetails} />
          <Route path="/movies" component={MovieList} />
           <Route path="/people" component={PeopleLists} /> 
          <Route path="/people/:id" component={PeopleDetails} />
          <Route patch="/">
            <Redirect to="/movies" />
          </Route>
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
