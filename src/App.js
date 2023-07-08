import { HashRouter } from "react-router-dom"

import { Navigation } from "./common/Navigation";
import { TileList } from "./common/TileList";

function App() {

  return (
    < >
      <HashRouter>
        <Navigation toMovies={"/movies"} toPeople={"/people"} />
      </HashRouter>
      <TileList />
    </>
  );
}

export default App;
