import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    marginLeft: theme.spacing(2),
  },
  closeIconWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 64,
    margin: '0 24px',
  },
}));

export default useStyles;
