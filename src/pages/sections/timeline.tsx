/* eslint-disable max-len */
import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';
import { School, Work } from '@mui/icons-material';

export default function CustomizedTimeline() {
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
    #Timeline
        </Typography>
      </Link>
      <Timeline position="alternate-reverse">
        <TimelineItem>
          <TimelineOppositeContent
            sx={{m: 'auto 0'}}
            align="right"
            variant="body2"
            color="text.secondary"
          >
          August 2022 - Present
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot>
              <School />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{py: '12px', px: 2}}>
            <Typography variant="h6" component="span">
            Master of Science in Computer Science
            </Typography>
            <Typography>University of Central Missouri</Typography>
            <Typography>GPA: 4.00</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{m: 'auto 0'}}
            variant="body2"
            color="text.secondary"
          >
          June 2018 - July 2022
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <Work />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{py: '12px', px: 2}}>
            <Typography variant="h6" component="span">
            Software Engineer
            </Typography>
            <Typography>Applaud</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{m: 'auto 0'}}
            align="right"
            variant="body2"
            color="text.secondary"
          >
          January 2018 - May 2018
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot>
              <Work />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{py: '12px', px: 2}}>
            <Typography variant="h6" component="span">
            Software Engineering Intern
            </Typography>
            <Typography>Applaud</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{m: 'auto 0'}}
            variant="body2"
            color="text.secondary"
          >
          September 2014 - May 2018
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <School />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{py: '12px', px: 2}}>
            <Typography variant="h6" component="span">
            Bachelor of Technology in Computer Science
            </Typography>
            <Typography>Gokaraju Rangaraju Institue of Engineering and Technology</Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </>
  );
}
