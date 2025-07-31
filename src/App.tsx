import { Box } from '@chakra-ui/react'
import './App.css'
import NavBar from './components/NavBar'
import OrganizeBySection from './components/OrganizeBySection'

import About from './components/About'
import Agenda from './components/Agenda'
import EventOverview from './components/EventOverview'
import Footer from './components/Footer'
import OurSpeackers from './components/OurSpeackers'
import ReasonList from './components/ReasonList'
import { useState, useRef } from 'react'


function App() {


  const targetRef1 = useRef<HTMLDivElement>(null);
  const targetRef2 = useRef<HTMLDivElement>(null);

  const handleScroll1 = () => {

    // Scroll to the bottom of the page
    if (targetRef1.current) {
      window.scrollTo({
        // top: document.body.scrollHeight,
        top: targetRef1.current.offsetTop,
        behavior: 'smooth',
      });
    }

  };

  const handleScroll2 = () => {

    // Scroll to the bottom of the page
    if (targetRef2.current) {
      window.scrollTo({
        // top: document.body.scrollHeight,
        top: targetRef2.current.offsetTop,
        behavior: 'smooth',
      });
    }

  };
  

  return (

    <Box paddingY={6}>

      {/* Section 1 */}
      <Box className='bg_img' >
        <NavBar onClickBtn={() => handleScroll1()} onClickBtn2={() => handleScroll2()} />
        <OrganizeBySection />
      </Box>

      {/* Section 2 */}
      <EventOverview refElement={targetRef1} />

      {/* Section 3 */}
      <ReasonList />

      {/* Section 4 */}
      <OurSpeackers />

      {/* Section 5 */}
      <Agenda refElement={targetRef2} />

      {/* Section 5 */}
      <About />

      {/* Section 6 */}
      {/* <Register /> */}

      {/* Last Section */}
      <Footer />

    </Box>
  )
}

export default App
