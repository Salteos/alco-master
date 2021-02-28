import { useState, useEffect, useCallback, useContext } from 'react';
import { TextField, InputAdornment, Button, Grid } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import { CocktailsList } from '../../components';
import {
  CocktailsContext,
  cocktailsDataRequested,
  cocktailsDataRequestSucceeded,
  cocktailsDataRequestFailed,
} from '../../reducers/cocktailsReducer';
import { useDebouncedValue } from '../../hooks';
import useStyles from './styles';

const SearchCocktail = () => {
  const classes = useStyles();
  const { state, dispatch } = useContext(CocktailsContext);
  const [searchText, setSearchText] = useState('');
  const [isSearchTextError, setIsSearchTextError] = useState(false);
  const [abortController, setAbortController] = useState(null);

  const debouncedSearchText = useDebouncedValue(searchText, 750);

  const handleSearchCocktail = (e) => {
    const { value } = e.target;

    setSearchText(value);
  };

  const searchCocktails = useCallback(async () => {
    if (debouncedSearchText.length > 2) {
      const controller = new AbortController();
      setAbortController(controller);
      setIsSearchTextError(false);
      dispatch(cocktailsDataRequested());

      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${debouncedSearchText}`,
          { signal: controller.signal }
        );

        if (response.status === 200) {
          const data = await response.json();

          if (data?.drinks) {
            dispatch(cocktailsDataRequestSucceeded(data.drinks));
          } else {
            dispatch(cocktailsDataRequestSucceeded([]));
          }
        }
      } catch (e) {
        dispatch(cocktailsDataRequestFailed(e?.message));
      }
    } else {
      setIsSearchTextError(true);
    }
  }, [debouncedSearchText, dispatch]);

  const abortAndSearchCocktails = () => {
    if (abortController) {
      abortController.abort();
    }

    searchCocktails();
  };

  useEffect(() => {
    if (debouncedSearchText) {
      searchCocktails();
    }
  }, [debouncedSearchText, searchCocktails]);

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Поиск по названию коктейля</h1>
      <Grid container wrap="nowrap">
        <TextField
          variant="outlined"
          placeholder="Название коктейля"
          error={isSearchTextError}
          helperText={
            isSearchTextError && 'Минимальная длина поисковой строки 3 символа.'
          }
          value={searchText}
          onChange={handleSearchCocktail}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Search />
              </InputAdornment>
            ),
          }}
          fullWidth
        />
        <Button
          className={classes.button}
          onClick={abortAndSearchCocktails}
          color="primary"
          variant="contained"
          size="large"
        >
          Искать
        </Button>
      </Grid>
      <CocktailsList
        cocktails={state.cocktails}
        loading={state.loading}
        errorMessage={state.errorMessage}
      />
    </div>
  );
};

export default SearchCocktail;
