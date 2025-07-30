import { Box, GridItem, Heading, SimpleGrid } from '@chakra-ui/react'
import './App.css'
import NavBar from './components/NavBar'
import OrganizeBySection from './components/OrganizeBySection'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'


function App() {

  const MotionGridItem = motion(GridItem);

  // Animation variants for the first GridItem (from left)
  const leftAnimation = {
    hidden: { opacity: 0, x: -100, y: 100, },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.8} },
  };

  // Animation variants for the second GridItem (from bottom)
  const bottomAnimation = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8} },
  };

  

  return (
    <Box paddingY={6}>
      {/* Section 1 */}
      <Box className='bg_img' >
        <NavBar />
        <OrganizeBySection />
      </Box>

      {/* Section 2 */}
      <Box className='!text-white' fontFamily='Roboto, sans-serif' maxWidth='95%' margin='auto' paddingX={4} paddingY='100px'>
        {/* <OrganizeBySection /> */}
        <SimpleGrid columns={4}>

          <MotionGridItem 
            colSpan={1} 
            textAlign='center'
            initial='hidden'
            variants={leftAnimation}
            whileInView='visible'
            viewport={{once: false }}
          >
            <h1 className='!text-[3.5rem] '>Event Overview</h1>
          </MotionGridItem>

          <MotionGridItem 
            colSpan={3}
            initial='hidden'
            variants={bottomAnimation}
            whileInView='visible'
            viewport={{once: false }}
          >

            <p className='!text-justify !text-[20px]'>
              Join us on April 9th in Cairo, Egypt, for Finastra's Universal Banking Forum, "Reimagine Banking: Adapt.
              Evolve. Thrive." This exclusive event is designed to help you navigate and excel in the rapidly evolving
              banking landscape.
              <br/><br/>
              Our forum will bring together business and technology experts, industry leaders, and visionaries to share
              their insights on the latest trends and challenges in the banking sector. You'll gain valuable knowledge on
              topics such as Generative AI, the impact of volatility, globalization challenges, persistent supply chain
              issues, recession threats, shifts in competitive dynamics, and evolving regulations.
              <br/><br/>
              Each session will delve into the implications, challenges, and opportunities these topics present, providing
              you with practical strategies to leverage the latest technologies and capitalize on emerging opportunities.
              This is a unique chance to learn from the best in the industry, stay ahead of the curve, and connect with
              fellow retail banking professionals.
              <br/><br/>
              Don't miss this opportunity to enhance your knowledge, skills, and network in the finance and banking sector.
              Register today and secure your place at this must-attend event!
            </p>
          </MotionGridItem>

        </SimpleGrid>
      </Box>




    </Box>
  )
}

export default App
