import { useContext, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Typography } from '@material-ui/core';
import { IngredientsTable } from '../../components';
import { CocktailsContext } from '../../reducers/cocktailsReducer';
import prepareIngredients from '../../utils/prepareIngredients';
import useStyles from './styles';

const CocktailDetails = () => {
  const classes = useStyles();
  const { id } = useParams();
  const {
    state: { cocktails },
  } = useContext(CocktailsContext);

  const cocktail = useMemo(
    () => cocktails.find((cocktail) => cocktail.idDrink === id),
    [cocktails, id]
  );

  const ingredients = useMemo(() => prepareIngredients(cocktail), [cocktail]);

  return (
    <div className={classes.container}>
      <Grid container wrap="nowrap" className={classes.wrapper}>
        <div className={classes.imageContainer}>
          <img
            className={classes.image}
            src={cocktail?.strDrinkThumb}
            alt={cocktail?.strDrink}
          />
        </div>
        <div className={classes.infoBlock}>
          <h2>{cocktail?.strDrink}</h2>
          <Typography variant="subtitle1">{cocktail?.strCategory}</Typography>
          <h2>Инструкция по приготовлению:</h2>
          <Typography variant="body1">{cocktail?.strInstructions}</Typography>
          <h4>Ингредиенты:</h4>
          <IngredientsTable ingredients={ingredients} />
        </div>
      </Grid>
    </div>
  );
};

export default CocktailDetails;
