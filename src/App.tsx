import { Box, GridItem, HStack, Image, List, SimpleGrid, VStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import './App.css'
import NavBar from './components/NavBar'
import OrganizeBySection from './components/OrganizeBySection'
import img_1 from './assets/other_images/Finastra-UB-Egypt-Benefits-of-attending SMALL.jpg'
import { LuCircleCheck, LuCircleDashed } from 'react-icons/lu'

import EventOverview from './components/EventOverview'
import ReasonList from './components/ReasonList'
import OurSpeackers from './components/OurSpeackers'
import Agenda from './components/Agenda'
import About from './components/About'
import Footer from './components/Footer'


function App() {



  

  return (

    <Box paddingY={6}>

      {/* Section 1 */}
      <Box className='bg_img' >
        <NavBar />
        <OrganizeBySection />
      </Box>

      {/* Section 2 */}
      <EventOverview />

      {/* Section 3 */}
      <ReasonList />

      {/* Section 4 */}
      <OurSpeackers />

      {/* Section 5 */}
      <Agenda />

      {/* Section 5 */}
      <About />

      {/* Section 6 */}
      <Footer />

    </Box>
  )
}

export default App
