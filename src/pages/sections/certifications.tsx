/* eslint-disable max-len */
import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import {styled} from '@mui/material/styles';
import {Button, Chip, Link, Typography} from '@mui/material';
import {OpenInNew, Send} from '@mui/icons-material';

const Item = styled(Paper)(({theme}) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const skills = [
  // Front end/Web Technologies
  'JavaScript', 'TypeScript', 'Angular', 'React.js', 'XML', 'HTML', 'CSS',

  // Server Side
  'Node.js', 'Express.js', 'Koa', 'GraphQL', 'Web Sockets', 'Rest API', 'AWS lambdas',
  'Serverless', 'JSON',

  // Databases
  'MySQL', 'PostgreSQL', 'MongoDB', 'Firebase Database/Storage', 'Redis',
  'Elasticsearch', 'SQL', 'RDBMS', 'NoSQL',

  // CSS Frameworks
  'Bootstrap', 'Semantic UI', 'Material UI', 'NZ-ZORRO', 'SASS', 'LESS',

  // Tools
  'Git Version Control System', 'Docker', 'Source Tree', 'Circle CI', 'Jenkins',
  'Puppeteer', 'Grunt', 'Gulp', 'Webpack', 'NPM', 'YARN',

  // Programming Languages
  'C', 'C++', 'Java', 'Python',

  // Testing Frameworks
  'Jest', 'Cypress', 'Junit',

  // Misc.
  'Figma', 'Sketch', 'Agile', 'Unix', 'D3.js', 'Chart.js', 'Object-oriented design',
];

export default function Certifications() {
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
        #Certifications
        </Typography>
      </Link>
      <Typography variant="h6" display="block" gutterBottom>
      CodeChef Certified Data Structure & Algorithms Programme (CCDSAP)
        <Button variant="text" endIcon={<OpenInNew />}>
            Verify
        </Button>
      </Typography>
      <Stack spacing={2} direction="row" style={{marginBottom: '10px'}}>
        <Chip label="Certificate Id: ab4671c" />
        <Chip label="username: arun_001" />
      </Stack>
      <Stack spacing={1} direction="row">
        <Chip label="Algorithms" size="small" variant="outlined"/>
        <Chip label="Data Structures" size="small" variant="outlined"/>
        <Chip label="C++" size="small" variant="outlined"/>
      </Stack>
    </Box>
  );
}
