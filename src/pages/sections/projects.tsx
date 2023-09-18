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

export default function Projects() {
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
        #Projects
        </Typography>
      </Link>
      <br></br>
      <img src='https://github-readme-stats.vercel.app/api/pin/?username=arunbandari&repo=mongo-gui&show_owner=true'></img>
    </Box>
  );
}
