import { useReducer } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import {
  CocktailsContext,
  cocktailsReducer,
  initialState,
} from './reducers/cocktailsReducer';
import { SearchCocktail, CocktailDetails } from './pages';
import { NavBar } from './components';

const App = () => {
  const [state, dispatch] = useReducer(cocktailsReducer, initialState);

  return (
    <CocktailsContext.Provider value={{ state, dispatch }}>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" component={SearchCocktail} exact />
          <Route path="/cocktail/:id" component={CocktailDetails} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </CocktailsContext.Provider>
  );
};

export default App;
