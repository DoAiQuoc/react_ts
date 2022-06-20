// import { Box, makeStyles } from '@mui/material';
import { Box, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import LinkPage from 'features/link/page/LinkPage';
import * as React from 'react';
import { Outlet, Route } from 'react-router-dom';

export interface HomeProps {}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'grid',
    gridTemplateColumns: '300px 1fr',
  },
  sideBar: {},
  main: {
    paddingTop: '10px',
  },
}));

export default function Home(props: HomeProps) {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.sideBar}>side bar</Box>
      <Box className={classes.main}>
        <Outlet />
      </Box>
    </Box>
  );
}
