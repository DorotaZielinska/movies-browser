import { HashRouter } from "react-router-dom";
import { Navigation } from "./common/Navigation";
import { TileList } from "./common/TileList";
import NotFound from "./features/AsideActions/NotFound/notFound";

function App() {
  return (
    <>
      <HashRouter>
        <Navigation toMovies={"/movies"} toPeople={"/people"} />
        <NotFound />
      </HashRouter>
      <TileList />
    </>
  );
}

export default App;
