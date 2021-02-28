import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Drawer, List, ListItem, IconButton } from '@material-ui/core';
import { Menu, Close } from '@material-ui/icons';
import useStyles from './styles';

const SideMenu = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpenMenu = () => {
    setOpen(true);
  };

  const handleCloseMenu = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton onClick={handleOpenMenu} color="inherit">
        <Menu />
      </IconButton>
      <Drawer anchor="right" open={open} onClose={handleCloseMenu}>
        <div className={classes.closeIconWrapper}>
          <IconButton onClick={handleCloseMenu}>
            <Close />
          </IconButton>
        </div>
        <List style={{ minWidth: 200 }}>
          <ListItem button className={classes.listItem}>
            <Link className={classes.link} to="/">
              Пункт 1
            </Link>
          </ListItem>
          <ListItem button className={classes.listItem}>
            <Link className={classes.link} to="/">
              Пункт 2
            </Link>
          </ListItem>
          <ListItem button className={classes.listItem}>
            <Link className={classes.link} to="/">
              Пункт 3
            </Link>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default SideMenu;
