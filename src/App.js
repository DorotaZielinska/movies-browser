import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import { Navigation } from "./common/Navigation";
import MovieList from "./features/MovieList";
import { PeopleLists } from "./features/PeopleList";
import { MovieDetails } from "./features/MovieDetails/index";
import { PeopleDetails } from "./features/PeopleDetails";

function App() {
  return (
    <>
      <BrowserRouter >
        <Navigation toMovies={"/popular/movies&language=en-US&page="} toPeople={"/popular/people&language=en-US&page="} />
        <Switch>
          <Route path="/movies/:id" component={MovieDetails} />{" "}
          <Route path="/popular/movies&language=en-US&page=" component={MovieList} />
          <Route path="/people/:id" component={PeopleDetails} />{" "}
          <Route path="/popular/people&language=en-US&page=" component={PeopleLists} />
          <Route path="/">
            <Redirect to="/popular/movies&language=en-US&page=" />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
