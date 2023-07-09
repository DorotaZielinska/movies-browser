import { HashRouter } from "react-router-dom"

import { Navigation } from "./common/Navigation";
import { MovieList } from "./features/MovieList";



function App() {

  return (
    < >
      <HashRouter>
        <Navigation toMovies={"/movies"} toPeople={"/people"} />
      <MovieList />
      </HashRouter>
    </>
  );
}

export default App;
