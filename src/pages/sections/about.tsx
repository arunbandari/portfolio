/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable max-len */
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import makeStyles from '@mui/styled-engine';
import {Alert, Chip, Link, Stack} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { LinkedIn, LinkOutlined } from '@mui/icons-material';

const bull = (
  <Box
    component="span"
    sx={{display: 'inline-block', mx: '2px', transform: 'scale(0.8)'}}
  >
    •
  </Box>
);

export default function BasicCard() {
  return (
    <>
      <Link
        component="button"
        variant="body2"
        onClick={() => {
          console.info("I'm a button.");
        }}
      >
        <Typography variant="h4" display="block" gutterBottom>
        #About
        </Typography>
      </Link>
      <div className='about-card'>
        <div className='left'>
          <img style={{borderRadius: '50%', padding: '20px', height: '200px'}} src='photo.jpeg'></img>
          <Stack direction="row" spacing={1} alignItems='center'>
            <Chip icon={<GitHubIcon />} label="GitHub"  variant="outlined"/>
            <Chip icon={<LinkedIn />} label="LinkedIn" variant="outlined"/>
            <Chip icon={<LinkOutlined />} label="npm" variant="outlined"/>
          </Stack>
        </div>
        <div className='right'>
          <Typography variant="h1" component="h2">
            Arun Bandari
          </Typography>
          <Chip variant="outlined" label="Full Stack Engineer (5+ years) • JavaScript • TypeScript • Node.js • Angular • React.js"/>
          {/* <Alert icon={false} severity="info">Full Stack Engineer (5+ years) • JavaScript • TypeScript • Node.js • Angular • React.js</Alert> */}
          <Typography variant="subtitle1" color="textSecondary">
         Software Engineer with 5 years of experience in building, scaling, and managing web applications using modern JavaScript frameworks including TypeScript, Angular, React.js and Node.js. Spearheaded the development of a lightweight, open-source web-based graphical user interface for MongoDB; with the aim of enabling simultaneous browsing of database collections; now being used by over 1000 users globally. Looking for next software engineering career challenge and am open to relocation.
          </Typography>
        </div>
      </div>
    </>
    // <Card sx={{display: 'flex'}}>
    //   <div>
    //     <img style={{borderRadius: '50%', padding: '20px', height: '200px'}} src='photo.jpeg'></img>

  //     <Stack direction="row" spacing={1} alignItems='center'>
  //       <Chip label="GitHub"  variant="outlined"/>
  //       <Chip label="LinkedIn" variant="outlined"/>
  //     </Stack>
  //   </div>
  //   <div className={{display: 'flex', flexDirection: 'column', width: '66.66%'}}>
  //     <CardContent>
  //       <Typography component="h1" variant="h1">
  //         Arun Bandari
  //       </Typography>
  //       <Typography variant="subtitle1" color="textSecondary">
  //       Software Engineer with 5 years of experience in building, scaling, and managing web applications using modern JavaScript frameworks including TypeScript, Angular, React.js and Node.js. Spearheaded the development of a lightweight, open-source web-based graphical user interface for MongoDB; with the aim of enabling simultaneous browsing of database collections; now being used by over 1000 users globally. Looking for next software engineering career challenge and am open to relocation.
  //       </Typography>
  //     </CardContent>
  //   </div>
  // </Card>
  );
}
