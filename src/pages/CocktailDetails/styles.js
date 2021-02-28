import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    margin: theme.spacing(3),
  },
  wrapper: {
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  imageContainer: {
    width: '30%',

    [theme.breakpoints.down('sm')]: {
      width: '50%',
    },

    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  image: {
    width: '100%',
  },
  infoBlock: {
    flexGrow: 1,
    marginLeft: theme.spacing(3),
    marginBottom: theme.spacing(3),

    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
}));

export default useStyles;
