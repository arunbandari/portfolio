import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/700.css';
import {Button} from '../../node_modules/@mui/material/index';
import ResponsiveAppBar from './components/Navbar';
import BasicCard from './sections/about';
import Certifications from './sections/certifications';
import Experience from './sections/experience';
import Projects from './sections/projects';
import BasicStack from './sections/skills';
import CustomizedTimeline from './sections/timeline';

export default function Home() {
  return (
    <>
      <ResponsiveAppBar></ResponsiveAppBar>
      <div className='container'>
        <BasicCard></BasicCard>
        <BasicStack></BasicStack>
        <br></br>
        <Experience></Experience>
        <br></br>
        <Projects></Projects>
        <br></br>
        <Certifications></Certifications>
        <br></br>
        <CustomizedTimeline></CustomizedTimeline>
      </div>
    </>
  );
}
