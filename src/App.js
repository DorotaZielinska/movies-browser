import { createContext, useState } from 'react';
import { HashRouter, Switch, Route, Redirect } from "react-router-dom"

import { Navigation } from "./common/Navigation";
import { TileList } from "./common/TileList";
import Loading from './features/AsideActions/Actions/loading';


export const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [placeholder, setPlaceholder] = useState('Search for movies...');

  const handleNavLinkClick = (newPlaceholder) => {
    setPlaceholder(newPlaceholder);
  };

  return (
    <MyContext.Provider value={{ placeholder, handleNavLinkClick }}>
      {children}
    </MyContext.Provider>
  );
};



function App() {

  return (
    < >
      <MyProvider>
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
      </MyProvider>
    </>
  );
}

export default App;
