import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import {
  AppBar,
  Avatar,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { AddCircleOutlined, SubjectOutlined } from '@material-ui/icons';
import { format } from 'date-fns';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },

  page: {
    width: '100%',
    backgroundColor: '#f9f9f9',
    padding: theme.spacing(3),
  },
  appbar: {
    width: `calc(100% - ${drawerWidth}px)`,
  },
  toolbar: theme.mixins.toolbar,
  date: {
    flexGrow: 1,
  },
  avatar: {
    marginLeft: theme.spacing(2),
  },
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  title: {
    padding: theme.spacing(3),
  },
  active: {
    backgroundColor: '#f4f4f4',
  },
}));

export default function Layout({ children }) {
  const history = useHistory();
  const location = useLocation();
  const classes = useStyles();

  const menuItems = [
    {
      text: 'My Notes',
      icon: <SubjectOutlined color="secondary" />,
      path: '/',
    },
    {
      text: 'Create Notes',
      icon: <AddCircleOutlined color="secondary" />,
      path: '/create',
    },
  ];

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar>
          <Typography className={classes.date}>
            Today is the {format(new Date(), 'do MMMM Y')}
          </Typography>
          <Typography>Mario</Typography>
          <Avatar src="/avatar.png" className={classes.avatar} />
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
      >
        <div>
          <Typography variant="h5" className={classes.title}>
            Material Notes
          </Typography>
        </div>
        <List>
          {menuItems.map((item) => (
            <ListItem
              key={item.text}
              className={
                location.pathname === item.path ? classes.active : null
              }
              button
              onClick={() => history.push(item.path)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <div className={classes.page}>
        <div className={classes.toolbar} />
        {children}
      </div>
    </div>
  );
}
