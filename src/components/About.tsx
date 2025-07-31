import { Box, GridItem, SimpleGrid, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";



const About = () => {

  const MotionBox = motion(Box);

  // Animations

  const topAnimationBox = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1, x: 0, y: 0, transition: { 
        duration: 0.8,
        delay: 0.3
      } 
    },
  };

  const leftAnimationHeader = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1, x: 0, y: 0, transition: { 
        duration: 0.8,
        delay: 0.2
      } 
    },
  };

  return (
    <Box
      paddingY="80px" 
      paddingX={2} 
    >
      <SimpleGrid
        marginX="auto"
        columns={{ sm: 1, xl: 3 }}
        gap={10}
        width="95%"
      >

        <GridItem colSpan={{ sm: 1, xl: 1 }}>
          <motion.h1
            className="!text-[3.5rem] !text-center !pb-10 !font-extrabold !bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 !bg-clip-text !text-transparent"
            initial='hidden'
            variants={leftAnimationHeader}
            whileInView='visible'
            viewport={{ once: false }}
          >
            About Finastra
          </motion.h1>
        </GridItem>
        
        <GridItem colSpan={{ sm: 1, xl: 2 }}>
          <Box className="!text-justify !p-5 !bg-linear-to-r to-purple-500/20 !rounded-3xl">
            <MotionBox
              initial='hidden'
              variants={topAnimationBox}
              whileInView='visible'
              viewport={{ once: false }}
            >
              <Text color={'white'} className="!text-justify !text-[18px] !p-5 !bg-linear-to-r to-purple-500/20 !rounded-3xl">
                Finastra is a global provider of financial services software applications across Lending, Payments, Treasury and Capital Markets, and Universal (retail and digital) Banking. Committed to unlocking the potential of people, businesses and communities everywhere, its vision is to accelerate the future of Open Finance through technology and collaboration, and its pioneering approach is why it is trusted by ~8,100 financial institutions, including 45 of the world's top 50 banks.
              </Text>
              <Text color={'white'} className="!p-5">For more information, visit www.finastra.com</Text>
            </MotionBox>
          </Box>
        </GridItem>

      </SimpleGrid>
    </Box>
  )

}

export default About;