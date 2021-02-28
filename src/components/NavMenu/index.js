import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import useStyles from './styles';

const NavMenu = () => {
  const classes = useStyles();

  return (
    <Grid>
      <Link className={classes.link} to="/">
        Пункт 1
      </Link>
      <Link className={classes.link} to="/">
        Пункт 2
      </Link>
      <Link className={classes.link} to="/">
        Пункт 3
      </Link>
    </Grid>
  );
};

export default NavMenu;
