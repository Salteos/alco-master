import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  card: {
    margin: `${theme.spacing(2)}px auto 0`,
    boxShadow: theme.shadows[2],
    borderRadius: 5,
    overflow: 'hidden',

    '&:hover': {
      cursor: 'pointer',
    },

    [theme.breakpoints.up('md')]: {
      width: `calc(20% - 16px)`,
    },

    [theme.breakpoints.down('md')]: {
      width: `calc(33.33% - 16px)`,
    },

    [theme.breakpoints.down('xs')]: {
      width: `calc(50% - 16px)`,
    },
  },
  infoBlock: {
    margin: theme.spacing(1),
  },
}));

export default useStyles;
