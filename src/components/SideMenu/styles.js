import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  closeIconWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 64,
    margin: '0 24px',
  },
  listItem: {
    '&:hover': {
      '& > $link': {
        textDecoration: 'underline',
      },
    },
  },
  link: {
    textDecoration: 'none',
    color: theme.palette.common.black,
  },
}));

export default useStyles;
