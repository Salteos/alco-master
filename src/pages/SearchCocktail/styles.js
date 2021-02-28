import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    margin: theme.spacing(3),
  },
  title: {
    fontSize: '5rem',
  },
  button: {
    marginLeft: theme.spacing(3),
  },
}));

export default useStyles;
