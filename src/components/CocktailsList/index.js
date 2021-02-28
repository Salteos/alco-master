import { Grid, Typography } from '@material-ui/core';
import useStyles from './styles';
import CocktailsCard from '../CocktailCard';

const CocktailList = ({ cocktails, loading, errorMessage }) => {
  const classes = useStyles();

  return (
    <div>
      {loading && (
        <Typography align="center" className={classes.text}>
          Loading...
        </Typography>
      )}
      {errorMessage && <Typography align="center">{errorMessage}</Typography>}
      {!loading && !errorMessage && (
        <Grid container justify="center" className={classes.text}>
          {cocktails.length === 0 && (
            <Typography align="center" className={classes.text}>
              Список пуст
            </Typography>
          )}
          {cocktails.map((cocktail) => (
            <CocktailsCard key={cocktail.idDrink} cocktail={cocktail} />
          ))}
        </Grid>
      )}
    </div>
  );
};

export default CocktailList;
