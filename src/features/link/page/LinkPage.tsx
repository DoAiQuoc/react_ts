import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import * as React from 'react';
import Import from '../components/Import';
import Table from '../components/Table';

export interface LinkPageProps {}
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    gridTemplateRows: '150px 1fr',
  },
}));

export default function LinkPage(props: LinkPageProps) {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Import />
      <Table />
    </Box>
  );
}
