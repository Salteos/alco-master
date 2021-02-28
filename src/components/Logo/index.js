import { IMAGES } from '../../constants';
import useStyles from './styles';

const Logo = () => {
  const classes = useStyles();
  return <img className={classes.logo} src={IMAGES.logo} alt="logo" />;
};

export default Logo;
