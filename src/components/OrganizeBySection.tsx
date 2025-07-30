import { Box, Image, Text, VStack } from "@chakra-ui/react";
import finastra_text from '../assets/text/finastra-boardroom.png';
import main_img from '../assets/other_images/Finastra-UB-Egypt-Event-Overview SMALL.jpg'

const OrganizeBySection = () => {

  return (
    <Box marginX='auto' maxWidth='1200px' paddingTop='100px' fontFamily='Roboto, sans-serif' overflow='hidden'>
      <VStack>
        <Text paddingBottom='36px' className="text-[#878787] !text-[20px] !font-light">Organized By</Text>
        <Image width='340px' paddingBottom={10} src={finastra_text} />
        <p className="!text-white !text-[80px]/24 !text-center !font-semibold !tracking-tight">
          Reimagine Banking:
          <br />
          Adapt. Evolve. Thrive.
        </p>
        <Text className="text-[#878787] !text-[18px]">Date: 9th April 2025</Text>
        <Text className="text-[#878787] !text-[18px]">Time: 9:30 AM - 2:00 PM GMT+2</Text>
        <Text className="text-[#878787] !text-[18px] !pb-12">The Nile Ritz-Carlton, Cairo, Egypt</Text>
        <span className="!mb-[-60px]">
          <Image src={main_img} borderRadius='20px' overflow='hidden' />
        </span>
      </VStack>
    </Box>
  )

}

export default OrganizeBySection;