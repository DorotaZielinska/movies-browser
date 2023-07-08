import { HashRouter } from "react-router-dom"

import { Navigation } from "./common/Navigation";

function App() {

  return (
    < >
      <HashRouter>
        <Navigation toMovies={"/movies"} toPeople={"/people"} />
      </HashRouter>
    </>
  );
}

export default App;
