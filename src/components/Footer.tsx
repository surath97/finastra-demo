import {
  Box,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Link,
  List,
  Separator,
  SimpleGrid,
  Span,
  Text,
  VStack,
} from "@chakra-ui/react";
import img1 from "../assets/awards_images/BPW-2024_2.png";
import img2 from "../assets/awards_images/bestwork-04.png";
import img3 from "../assets/awards_images/bestwork-03.png";
import img4 from "../assets/awards_images/bestwork-01.png";
import { LuLocate } from "react-icons/lu";
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoMdMailOpen } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {

  return (

    <Box>
      <SimpleGrid
        marginX="auto"
        columns={{ sm: 1, xl: 2 }}
        gap={10}
        width="95%"
        paddingX={20}
      >
        <GridItem color={"white"}>
          <Heading size={"2xl"} paddingY={5}>Cogent Solutions™</Heading>
          <Text textStyle="sm">
            Through our conferences we transform your business challenges into
            opportunities. Our clients and customers are leading government
            entities and the fortune 500 companies.
          </Text>
          <Heading size={"2xl"} paddingY={5}>Awards</Heading>
          <HStack>
            <Image src={img1} boxSize="120px" />
            <Image src={img2} boxSize="120px" />
            <Image src={img3} boxSize="120px" />
            <Image src={img4} height="120px" width="auto" />
          </HStack>
        </GridItem>

        <GridItem color={"white"}>
          <Heading size={"2xl"} paddingY={5}>Our Office</Heading>

          <VStack align={'flex-start'}>

            <Box className="hover:text-gray-300 hover:scale-105 transition-all">
              <HStack spaceX={5}>
                <FaLocationDot />
                <Text>Middle East & Africa HQ</Text>
              </HStack>
              <Text className="!pl-11" textStyle="sm">Office No: 209, The Metropolis Tower</Text>
              <Text className="!pl-11" textStyle="sm">Business Bay, Dubai, United Arab Emirates</Text>
            </Box>

            <Box className="hover:text-gray-300 hover:scale-105 transition-all">
              <HStack spaceX={5}>
                <FaLocationDot />
                <Text>Asia Pacific HQ</Text>
              </HStack>
              <Text className="!pl-11" textStyle="sm">2nd floor Green Lanka Tower, Colombo</Text>
              <Text className="!pl-11" textStyle="sm">Sri Lanka</Text>
            </Box>

            <Box className="hover:text-gray-300 hover:scale-105 transition-all">
              <HStack spaceX={5}>
                <FaLocationDot />
                <Text>Saudi Arabia HQ</Text>
              </HStack>
              <Text className="!pl-11" textStyle="sm">Riyadh , Saudi Arabia</Text>
            </Box>

            <Box className="hover:text-gray-300 hover:scale-105 transition-all">
              <HStack spaceX={5}>
                <BiSolidPhoneCall />
                <Text>+971 4 576 1039 / +971 50 643 5244</Text>
              </HStack>
            </Box>

            <Box className="hover:text-gray-300 hover:scale-105 transition-all">
              <HStack spaceX={5}>
                <IoMdMailOpen />
                <Text>partnerships@cogentsolutions.ae</Text>
              </HStack>
            </Box>

          </VStack>

        </GridItem>
      </SimpleGrid>


      <Box paddingX={10} paddingY='50px'>
        <Separator colorPalette={'gray'} />

        <SimpleGrid columns={{ sm: 1, xl: 2 }}>
          <GridItem>
            <Text paddingY={10} color={'white'}>© 2025 Cogent Solutions Event Management LLC. All Right Reserved</Text>
          </GridItem>

          <GridItem>
            <HStack paddingY={10} color={'white'} gapX={8} justifyContent={'flex-end'}>
              
              <Link color={'white'} href="https://www.linkedin.com/company/cogent-solutions-event-management/mycompany/"><FaLinkedinIn size={30} className="hover:text-blue-800/60 hover:scale-110" /></Link>
              <Link color={'white'} href="https://web.facebook.com/cseventsuae/?_rdc=1&_rdr#"><FaFacebook size={28} className="hover:text-blue-600 hover:scale-110" /></Link>
              <Link color={'white'} href="https://www.instagram.com/cogent_solutions/"><FaInstagram size={30} className="hover:bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 hover:scale-110" /></Link>
              <Link color={'white'} href="https://x.com/cseventsdxb"><FaXTwitter size={30} className="hover:text-gray-500 hover:scale-110" /></Link>
            </HStack>
          </GridItem>
        </SimpleGrid>
      </Box>

    </Box>
  );
};

export default Footer;
