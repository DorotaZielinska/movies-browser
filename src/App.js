import { HashRouter, Switch, Route, Redirect } from "react-router-dom"
import { Navigation } from "./common/Navigation";
import { TileList } from "./common/TileList";
import NotFound from "./features/AsideActions/NotFound/notFound";

function App() {
  return (
    <>
      <HashRouter>
        <Navigation toMovies={"/movies"} toPeople={"/people"} />
        <Switch>
          <Route path="/people">
          </Route>
          <Route path="/movies">
            <TileList />
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
