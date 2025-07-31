import {
  Box,
  GridItem,
  HStack,
  Image,
  List,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import img_1 from "../assets/other_images/Finastra-UB-Egypt-Benefits-of-attending SMALL.jpg";
import list_ico_1 from "../assets/list_icons/Icon_5h.png";
import list_ico_2 from "../assets/list_icons/Icon_4f.png";
import list_ico_3 from "../assets/list_icons/Icon_2ff.png";
import list_ico_4 from "../assets/list_icons/Icon_8d.png";
import list_ico_5 from "../assets/list_icons/Icon_1f.png";

const ReasonList = () => {

  const MotionListItem = motion(List.Item);
  const MotionBox      = motion(Box);

  // Left Animations for List items
  const leftAnimation1 = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1, x: 0, transition: { 
        duration: 0.8,
        delay: 0.1
      } 
    },
  };

  const leftAnimation2 = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1, x: 0, transition: { 
        duration: 0.8,
        delay: 0.2
      } 
    },
  };

  const leftAnimation3 = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1, x: 0, transition: { 
        duration: 0.8,
        delay: 0.3
      } 
    },
  };

  const leftAnimation4 = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1, x: 0, transition: { 
        duration: 0.8,
        delay: 0.4
      } 
    },
  };

  const leftAnimation5 = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1, x: 0, transition: { 
        duration: 0.8,
        delay: 0.5
      } 
    },
  };

  // Top animations for Box items
    const topAnimation = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1, y: 0, transition: { 
        duration: 1,
        // delay: 0.5
      } 
    },
  };

  return (
    <Box
      maxWidth="95%"
      paddingBottom="80px"
      marginX="auto"
      fontFamily="Roboto, sans-serif"
    >
      <MotionBox
        height="auto"
        maxWidth="1200px"
        className="bg_gradient_1"
        marginX="auto"
        borderRadius="30px"
        initial='hidden' variants={topAnimation} whileInView='visible' viewport={{ once: false }}
      >
        <SimpleGrid padding={10} gap={5} columns={{ base: 1, lg: 2}}>
          <GridItem>
            <Image src={img_1} borderRadius="30px" objectFit="cover" />
          </GridItem>
          <GridItem className="text-white">
            <VStack>
              <h3 className="!text-[1.7rem]">
                TOP REASONS WHY THIS IS THE ONLY CONFERENCE YOU NEED TO ATTEND
                IN 2025
              </h3>

              <List.Root
                gap="6"
                variant="plain"
                align="center"
                className="!text-[18px]"
              >
                <MotionListItem gap={2} initial='hidden' variants={leftAnimation1} whileInView='visible' viewport={{ once: false }}>
                  <List.Indicator asChild>
                    <Image src={list_ico_1} boxSize="30px" />
                  </List.Indicator>
                  Learn from industry experts
                </MotionListItem>

                <MotionListItem gap={2} initial='hidden' variants={leftAnimation2} whileInView='visible' viewport={{ once: false }}>
                  <List.Indicator asChild>
                    <Image src={list_ico_2} boxSize="30px" />
                  </List.Indicator>
                  Stay ahead of emerging trends
                </MotionListItem>

                <MotionListItem gap={2} initial='hidden' variants={leftAnimation3} whileInView='visible' viewport={{ once: false }}>
                  <List.Indicator asChild>
                    <Image src={list_ico_3} boxSize="30px" />
                  </List.Indicator>
                  Connect with fellow banking professionals
                </MotionListItem>

                <MotionListItem gap={2} initial='hidden' variants={leftAnimation4} whileInView='visible' viewport={{ once: false }}>
                  <List.Indicator asChild>
                    <Image src={list_ico_4} boxSize="30px" />
                  </List.Indicator>
                  Enhance your knowledge, skills, and network
                </MotionListItem>

                <MotionListItem gap={2} initial='hidden' variants={leftAnimation5} whileInView='visible' viewport={{ once: false }}>
                  <List.Indicator asChild>
                    <Image src={list_ico_5} boxSize="30px" />
                  </List.Indicator>
                  Share your expertise and experience with peers
                </MotionListItem>
              </List.Root>
            </VStack>
          </GridItem>
        </SimpleGrid>
      </MotionBox>
    </Box>
  );
};

export default ReasonList;
