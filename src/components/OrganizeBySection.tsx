import { Box, Image, Text, VStack } from "@chakra-ui/react";
import finastra_text from '../assets/text/finastra-boardroom.png';
import main_img from '../assets/other_images/Finastra-UB-Egypt-Event-Overview SMALL.jpg'
import { motion } from "framer-motion";

const OrganizeBySection = () => {

  const MotionImage = motion(Image);

    const topAnimationLogo = {
    hidden: { opacity: 0, y: -150 },
    visible: {
      opacity: 1, x: 0, y: 0, transition: { 
        duration: 2,
        delay: 0.1
      } 
    },
  };

  return (
    <Box marginX='auto' maxWidth='1200px' paddingTop='100px' fontFamily='Roboto, sans-serif' overflow='hidden'>
      <VStack>
        <Text paddingBottom='36px' className="text-[#878787] !text-2xl">Organized By</Text>

        <MotionImage 
          width={{ base: '90%' , md: '50%', lg: '50%', xl: '50%'}} 
          paddingBottom={10} 
          src={finastra_text} 
          // -------------------
          initial='hidden' 
          variants={topAnimationLogo} 
          whileInView='visible' 
          viewport={{ once: false }}
        />

        <span className="relative flex size-4">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-500 opacity-75"></span>
          <span className="relative inline-flex size-3 rounded-full bg-purple-500"></span>
        </span>

        <p className="!text-white !text-[80px]/24 !text-center !font-semibold !tracking-tight">
          Reimagine Banking:
          <br />
          Adapt. Evolve. Thrive.
        </p>
        <Text className="text-[#878787] !text-[18px]">Date: 9th April 2025</Text>
        <Text className="text-[#878787] !text-[18px]">Time: 9:30 AM - 2:00 PM GMT+2</Text>
        <Text className="text-[#878787] !text-[18px] !pb-12">The Nile Ritz-Carlton, Cairo, Egypt</Text>
        <span className="!mb-[-60px] !justify-center">
          <Image paddingX={{base: 4}} src={main_img} borderRadius='20px' overflow='hidden' />
        </span>
      </VStack>
    </Box>
  )

}

export default OrganizeBySection;