import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { Navigation } from "./common/Navigation";
import MovieList from "./features/MovieList";
import { PeopleLists } from "./features/PeopleList";
import { MovieDetails } from "./features/MovieDetails/index";
import { useSelector } from "react-redux";
import { selectPage } from "./common/Pagination/paginationSlice";

function App() {
  const page = useSelector(selectPage);

  return (
    <>
     <HashRouter>
        <Navigation
          toMovies={`/movies&page=${page}`}
          toPeople={`/people&page=${page}`}
        />
        <Switch>
          <Route path="/movies/:id" component={MovieDetails} />
          <Route path={`/movies&page=${page}`} component={MovieList} />
          <Route path={`/people&page=${page}`} component={PeopleLists} />
          <Route patch="/">
            <Redirect to={`/movies&page=${page}`} />
          </Route>
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
