import { useHistory, useRouteMatch } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  useTheme,
  useMediaQuery,
} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Logo from '../Logo';
import NavMenu from '../NavMenu';
import SideMenu from '../SideMenu';
import useStyles from './styles';

const NavBar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();
  const showBackwardArrow = useRouteMatch('/cocktail/:id')?.params?.id;
  const showHamburger = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <AppBar position="static">
      <Toolbar>
        {showBackwardArrow && (
          <IconButton color="inherit" onClick={() => history.goBack()}>
            <ArrowBackIcon />
          </IconButton>
        )}
        <Logo />
        <Typography className={classes.title}>Alco Master</Typography>
        {!showHamburger && <NavMenu />}
        {showHamburger && <SideMenu />}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
