import { HashRouter, Redirect, Route, Switch } from "react-router-dom"

import { Navigation } from "./common/Navigation";
import { TileList } from "./common/TileList";
import Loading from "./features/AsideActions/Actions/loading"

function App() {

  return (
    < >
      <HashRouter>
          <Navigation toMovies={"/movies"} toPeople={"/people"} />
          <Switch>
            <Route path="/people">
              <Loading />
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
