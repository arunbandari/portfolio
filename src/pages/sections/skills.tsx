/* eslint-disable max-len */
import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import {styled} from '@mui/material/styles';
import {Chip, Link, Typography} from '@mui/material';

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

export default function BasicStack() {
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
        #Skills
        </Typography>
      </Link>
      <Stack direction="row" spacing={1} flexWrap='wrap'>
        {skills.map((skill, index) => {
          return (
            <Chip key={index} label={skill} variant="outlined" style={{margin: '5px'}}/>
          );
        })}
      </Stack>
    </Box>
  );
}
