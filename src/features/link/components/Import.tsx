import { Box, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import * as React from 'react';

export interface ImportProps {}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
}));

export default function Import(props: ImportProps) {
  const classes = useStyles();

  return (
    <Box
      className={classes.root}
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
      <TextField id="sorted" label="Sorted" variant="outlined" size="small" />
      <TextField id="link-name" label="Link Name" variant="outlined" size="small" />
      <TextField id="link-path" label="Link Path" variant="outlined" size="small" />
    </Box>
  );
}
