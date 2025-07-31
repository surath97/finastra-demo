import { Badge, Box, Card, Grid, GridItem, HStack, Image, SimpleGrid } from "@chakra-ui/react";
import speakers from "../data/speakers";
import { motion } from "framer-motion";

const OurSpeackers = () => {

  const MotionSimpleGrid = motion(SimpleGrid);

  // Animations
  const topAnimationHeader = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1, x: 0, y: 0, transition: { 
        duration: 0.8,
        // delay: 0.1
      } 
    },
  };

  const topAnimationGrid = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1, x: 0, y: 0, transition: { 
        duration: 1,
        delay: 0.3
      } 
    },
  };

  return (
    
    <Box paddingY='50px' paddingX={2}>
      <motion.h1 
        className="!text-[3.5rem] !text-center !pb-10 !font-extrabold !bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 !bg-clip-text !text-transparent"
        initial='hidden' 
        variants={topAnimationHeader} 
        whileInView='visible' 
        viewport={{ once: false }}
      >
        Our Speakers
      </motion.h1>
      <MotionSimpleGrid
        marginX='auto'
        columns={{ sm: 1, lg: 2, xl: 3}}
        gap={10}
        width='95%'
        // -----------
        initial='hidden' 
        variants={topAnimationGrid} 
        whileInView='visible' 
        viewport={{ once: false }}
      >
        { speakers.map((sp, index) => (

          <GridItem key={index} className="hover:scale-110 transition-all duration-300">
            
            <Card.Root minHeight={'280px'} bg={'bg.inverted'} flexDirection={{ sm:'column', lg: 'row'}} overflow="hidden" variant='outline' className="!bg-linear-to-r to-purple-500/20 !border-2 !border-gray-500/50" >
              <Image
                objectFit="cover"
                maxW="200px"
                src={sp.logo}
                alt={sp.name}
              />
              <Box>
                <Card.Body>
                  <Card.Title color={'white'} mb="2" className="!text-[25px] !mb-5">{sp.name}</Card.Title>
                  <Card.Description color={'gray.400'} className="!text-[15px] !font-bold">
                    {sp.position}
                  </Card.Description>
                  <HStack mt="4">
                    <Badge>Finastra</Badge>
                    <Badge>IT</Badge>
                  </HStack>
                </Card.Body>
              </Box>
            </Card.Root>

          </GridItem>

        ))}

      </MotionSimpleGrid>
    </Box>

  )

}

export default OurSpeackers;