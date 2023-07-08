import { HashRouter, Redirect, Route, Switch } from "react-router-dom"

import { Navigation } from "./common/Navigation";
import { TileList } from "./common/TileList";
import Loading from "./features/AsideActions/Actions/loading"
import NotFound from "./features/AsideActions/Actions/notFound";

function App() {

  return (
    < >
      <HashRouter>
        <Navigation toMovies={"/movies"} toPeople={"/people"} />
        <Switch>
          <Route path="/people">
            {/* <Loading /> */}
            <NotFound />
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
