/* eslint-disable max-len */
import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import {styled} from '@mui/material/styles';
import {Card, Chip, Link, Typography} from '@mui/material';

const Item = styled(Paper)(({theme}) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Experience() {
  return (

    <Box>
      <Link
        component="button"
        variant="body2"
        onClick={() => {
          console.info("I'm a button.");
        }}
      >
        <Typography variant="h4" display="block" gutterBottom>
        #Experience
        </Typography>
      </Link>

      <Typography variant='h5'>Senior Software Engineer</Typography>
      <Typography variant='button' display="block" gutterBottom>Applaud</Typography>
      <Typography variant='overline' display="block" gutterBottom>September 2021 - July 2022</Typography>
    </Box>
  );
}
