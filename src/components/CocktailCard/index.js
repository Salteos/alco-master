import { Grid, Typography, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import useStyles from './styles';

const CocktailsCard = ({ cocktail }) => {
  const history = useHistory();
  const classes = useStyles();

  return (
    <Grid
      item
      className={classes.card}
      onClick={() => history.push(`/cocktail/${cocktail.idDrink}`)}
    >
      <img src={cocktail.strDrinkThumb} width="100%" alt={cocktail.strDrink} />
      <div className={classes.infoBlock}>
        <h2>{cocktail.strDrink}</h2>
        <Typography varian="subtitle2">{cocktail.strCategory}</Typography>
      </div>
      <Button color="primary" fullWidth>
        Посмотреть
      </Button>
    </Grid>
  );
};

export default CocktailsCard;
