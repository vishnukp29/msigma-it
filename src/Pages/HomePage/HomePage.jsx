import React from 'react'
import { Box } from "@mui/material";
import Background from 'components/Home/Background/Background';
import Logos from 'components/Home/Logos/Logos';
import Projects from 'components/Home/Projects/Projects';
import Services from 'components/Home/Services/Services';
import OurTeam from 'components/Home/OurTeam/OurTeam';
import Training from 'components/Home/Training/Training';

const HomePage = () => {
  return (
    <Box> 
      <Background/> 
      <Logos/>
      <Projects/>
      <Services/>
      <OurTeam/>
      <Training/>
    </Box>
  )
}

export default HomePage
