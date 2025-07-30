import {
  Avatar,
  Button,
  Card,
  Icon,
  Input,
  Span,
  Timeline,
  Box,
  GridItem,
  SimpleGrid,
  Text,
  HStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { LuPen, LuTicket, LuX } from "react-icons/lu";

const Agenda = () => {

  const MotionBox = motion(Box);
  const MotionTimelineItem = motion(Timeline.Item);

  // Animations
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1, transition: { 
        duration: 2,
        // delay: 0.1
      } 
    },
  };

  // top Animations for List items -- Start
  const topAnimationGrid1 = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1, x: 0, y: 0, transition: { 
        duration: 0.8,
        delay: 0.1
      } 
    },
  };
  const topAnimationGrid2 = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1, x: 0, y: 0, transition: { 
        duration: 0.8,
        delay: 0.2
      } 
    },
  };
  const topAnimationGrid3 = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1, x: 0, y: 0, transition: { 
        duration: 0.8,
        delay: 0.3
      } 
    },
  };
  const topAnimationGrid4 = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1, x: 0, y: 0, transition: { 
        duration: 0.8,
        delay: 0.4
      } 
    },
  };
  const topAnimationGrid5 = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1, x: 0, y: 0, transition: { 
        duration: 0.8,
        delay: 0.5
      } 
    },
  };
  const topAnimationGrid6 = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1, x: 0, y: 0, transition: { 
        duration: 0.8,
        delay: 0.6
      } 
    },
  };
  const topAnimationGrid7 = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1, x: 0, y: 0, transition: { 
        duration: 0.8,
        delay: 0.7
      } 
    },
  };
  const topAnimationGrid8 = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1, x: 0, y: 0, transition: { 
        duration: 0.8,
        delay: 0.8
      } 
    },
  };
  const topAnimationGrid9 = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1, x: 0, y: 0, transition: { 
        duration: 0.8,
        delay: 0.9
      } 
    },
  };
  const topAnimationGrid10 = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1, x: 0, y: 0, transition: { 
        duration: 0.8,
        delay: 1
      } 
    },
  };
  const topAnimationGrid11 = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1, x: 0, y: 0, transition: { 
        duration: 0.8,
        delay: 1.1
      } 
    },
  };
  const topAnimationGrid12 = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1, x: 0, y: 0, transition: { 
        duration: 0.8,
        delay: 1.2
      } 
    },
  };

  // top Animations for List items -- End

  return (
    <MotionBox 
      paddingY="80px" 
      paddingX={2} 
      bg={'white'}
      // ------------
      initial='hidden' 
      variants={fadeIn} 
      whileInView='visible' 
      viewport={{ once: false }}
    >

      <SimpleGrid
        marginX="auto"
        columns={{ sm: 1, xl: 3 }}
        gap={10}
        width="95%"
      >
        <GridItem colSpan={{ sm: 1, xl: 1 }}>
          <h1
            className="!text-[3.5rem] !text-center !pb-10 !font-extrabold !bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 !bg-clip-text !text-transparent"
            // initial='hidden'
            // variants={topAnimationHeader}
            // whileInView='visible'
            // viewport={{ once: false }}
          >
            Agenda
          </h1>
        </GridItem>

        <GridItem colSpan={{ sm: 1, xl: 2 }}>

          <Timeline.Root size="xl" variant="subtle">

            {/* 1 */}
            <MotionTimelineItem
              initial='hidden' 
              variants={topAnimationGrid1} 
              whileInView='visible' 
              viewport={{ once: false }}
            >
              <Timeline.Connector>
                <Timeline.Separator />
                <Timeline.Indicator>
                  <Icon fontSize="xs">
                    <LuPen />
                  </Icon>
                </Timeline.Indicator>
              </Timeline.Connector>
              <Timeline.Content paddingBottom={10}>
                <Timeline.Title>
                  {/* <Avatar.Root size="2xs">
                    <Avatar.Image src="https://i.pravatar.cc/150?u=a" />
                    <Avatar.Fallback />
                  </Avatar.Root> */}
                  <HStack width={'100%'}>
                    <Text width={'15%'} fontSize={'2xl'}>09.30 AM</Text>
                    <Span width={'auto'} marginX={1} />
                    <Text width={'80%'} fontSize={'xl'}>Registration & Welcome Coffee</Text>
                  </HStack>
                </Timeline.Title>
              </Timeline.Content>
            </MotionTimelineItem>

            {/* 2 */}
            <MotionTimelineItem
              initial='hidden' 
              variants={topAnimationGrid2} 
              whileInView='visible' 
              viewport={{ once: false }}
            >
              <Timeline.Connector>
                <Timeline.Separator />
                <Timeline.Indicator>
                  <Icon fontSize="xs">
                    <LuPen />
                  </Icon>
                </Timeline.Indicator>
              </Timeline.Connector>
              <Timeline.Content paddingBottom={10}>
                <Timeline.Title>
                  {/* <Avatar.Root size="2xs">
                    <Avatar.Image src="https://i.pravatar.cc/150?u=a" />
                    <Avatar.Fallback />
                  </Avatar.Root> */}
                  <HStack width={'100%'}>
                    <Text width={'15%'} fontSize={'2xl'}>10.00 AM</Text>
                    <Span width={'auto'} marginX={1} />
                    <Text width={'80%'} fontSize={'xl'}>Opening Remarks</Text>
                  </HStack>
                </Timeline.Title>
              </Timeline.Content>
            </MotionTimelineItem>

            {/* 3 */}
            <MotionTimelineItem
              initial='hidden' 
              variants={topAnimationGrid3} 
              whileInView='visible' 
              viewport={{ once: false }}
            >
              <Timeline.Connector>
                <Timeline.Separator />
                <Timeline.Indicator>
                  <Icon fontSize="xs">
                    <LuPen />
                  </Icon>
                </Timeline.Indicator>
              </Timeline.Connector>
              <Timeline.Content paddingBottom={10}>
                <Timeline.Title>
                  {/* <Avatar.Root size="2xs">
                    <Avatar.Image src="https://i.pravatar.cc/150?u=a" />
                    <Avatar.Fallback />
                  </Avatar.Root> */}
                  <HStack width={'100%'}>
                    <Text width="15%" fontSize={'2xl'}>10.10 AM</Text>
                    <Span width={'auto'} marginX={1} />
                    <Text width={'80%'} fontSize={'xl'}>Keynote session: Digital Transformation in a Gen AI World</Text>
                  </HStack>
                </Timeline.Title>
                <Span color="fg.muted">Ms. Siobhan Byron, Executive Vice President, Finastra Universal Banking</Span>
              </Timeline.Content>
            </MotionTimelineItem>

            {/* 4 */}
            <MotionTimelineItem
              initial='hidden' 
              variants={topAnimationGrid4} 
              whileInView='visible' 
              viewport={{ once: false }}
            >
              <Timeline.Connector>
                <Timeline.Separator />
                <Timeline.Indicator>
                  <Icon fontSize="xs">
                    <LuPen />
                  </Icon>
                </Timeline.Indicator>
              </Timeline.Connector>
              <Timeline.Content paddingBottom={10}>
                <Timeline.Title>
                  {/* <Avatar.Root size="2xs">
                    <Avatar.Image src="https://i.pravatar.cc/150?u=a" />
                    <Avatar.Fallback />
                  </Avatar.Root> */}
                  <HStack width={'100%'}>
                    <Text width="15%" fontSize={'2xl'}>10.30 AM</Text>
                    <Span width={'auto'} marginX={1} />
                    <Text width={'80%'} fontSize={'xl'}>Decoding the Future - Transformation: The Opportunity & Time is Now</Text>
                  </HStack>
                </Timeline.Title>
                <Span color="fg.muted">Mr. Daragh O'Byrne, Senior Director, Marketing, Universal Banking, Finastra</Span>
              </Timeline.Content>
            </MotionTimelineItem>

            {/* 5 */}
            <MotionTimelineItem
              initial='hidden' 
              variants={topAnimationGrid5} 
              whileInView='visible' 
              viewport={{ once: false }}
            >
              <Timeline.Connector>
                <Timeline.Separator />
                <Timeline.Indicator>
                  <Icon fontSize="xs">
                    <LuPen />
                  </Icon>
                </Timeline.Indicator>
              </Timeline.Connector>
              <Timeline.Content paddingBottom={10}>
                <Timeline.Title>
                  {/* <Avatar.Root size="2xs">
                    <Avatar.Image src="https://i.pravatar.cc/150?u=a" />
                    <Avatar.Fallback />
                  </Avatar.Root> */}
                  <HStack width={'100%'}>
                    <Text width="15%" fontSize={'2xl'}>11.00 AM</Text>
                    <Span width={'auto'} marginX={1} />
                    <Text width={'80%'} fontSize={'xl'}>Panel Discussion: Customer Acquisition - Gaining New Customers in a Hyper Competitive World</Text>
                  </HStack>
                </Timeline.Title>
                <Card.Root size="md" variant={'elevated'}>
                  <Card.Body textStyle="md" lineHeight="tall">
                    <Span color="fg.muted">Hamid Nirouzad, Managing Director - Africa, Finastra Universal Banking</Span>
                    <Span color="fg.muted">Ahmad Hamdy, Head of Information Technology, International Company for Leasing S.A.E. "Incolease".</Span>
                    <Span color="fg.muted">Ms. Riham Ismail Kassem Muhammad, Corporate & Supporting Functions CEX Senior, FABMISR</Span>
                  </Card.Body>
                  <Card.Footer>
                    <Button size="xs" variant="surface" rounded="md">
                      👏 2
                    </Button>
                  </Card.Footer>
                </Card.Root>
              </Timeline.Content>
            </MotionTimelineItem>

            {/* 6 */}
            <MotionTimelineItem
              initial='hidden' 
              variants={topAnimationGrid6} 
              whileInView='visible' 
              viewport={{ once: false }}
            >
              <Timeline.Connector>
                <Timeline.Separator />
                <Timeline.Indicator>
                  <Icon fontSize="xs">
                    <LuPen />
                  </Icon>
                </Timeline.Indicator>
              </Timeline.Connector>
              <Timeline.Content paddingBottom={10}>
                <Timeline.Title>
                  {/* <Avatar.Root size="2xs">
                    <Avatar.Image src="https://i.pravatar.cc/150?u=a" />
                    <Avatar.Fallback />
                  </Avatar.Root> */}
                  <HStack width={'100%'}>
                    <Text width="15%" fontSize={'2xl'}>11.30 AM</Text>
                    <Span width={'auto'} marginX={1} />
                    <Text width={'80%'} fontSize={'xl'}>Panel Discussion: Customer Retention - Keeping Customers When Loyalty Is Dead</Text>
                  </HStack>
                </Timeline.Title>
                <Card.Root size="md" variant={'elevated'}>
                  <Card.Body textStyle="md" lineHeight="tall">
                    <Span color="fg.muted">Karim El Mourabet, Solution Consulting Director - Middle East & Africa, Finastra Universal Banking</Span>
                    <Span color="fg.muted">Heba Yehia, Head of Digital Products, Arab African International Bank; Ali, Co-Founder and CEO of CARITech</Span>
                    <Span color="fg.muted">Mohamed Elazzazy, Head of IT Governance and Change Management, Al-Baraka Bank Egypt</Span>
                  </Card.Body>
                  <Card.Footer>
                    <Button size="xs" variant="surface" rounded="md">
                      👏 2
                    </Button>
                  </Card.Footer>
                </Card.Root>
              </Timeline.Content>
            </MotionTimelineItem>

            {/* 7 */}
            <MotionTimelineItem
              initial='hidden' 
              variants={topAnimationGrid7} 
              whileInView='visible' 
              viewport={{ once: false }}
            >
              <Timeline.Connector>
                <Timeline.Separator />
                <Timeline.Indicator>
                  <Icon fontSize="xs">
                    <LuPen />
                  </Icon>
                </Timeline.Indicator>
              </Timeline.Connector>
              <Timeline.Content paddingBottom={10}>
                <Timeline.Title>
                  {/* <Avatar.Root size="2xs">
                    <Avatar.Image src="https://i.pravatar.cc/150?u=a" />
                    <Avatar.Fallback />
                  </Avatar.Root> */}
                  <HStack width={'100%'}>
                    <Text width="15%" fontSize={'2xl'}>12.00 AM</Text>
                    <Span width={'auto'} marginX={1} />
                    <Text width={'80%'} fontSize={'xl'}>Coffee Break & Networking</Text>
                  </HStack>
                </Timeline.Title>
              </Timeline.Content>
            </MotionTimelineItem>

            {/* 8 */}
            <MotionTimelineItem
              initial='hidden' 
              variants={topAnimationGrid8} 
              whileInView='visible' 
              viewport={{ once: false }}
            >
              <Timeline.Connector>
                <Timeline.Separator />
                <Timeline.Indicator>
                  <Icon fontSize="xs">
                    <LuPen />
                  </Icon>
                </Timeline.Indicator>
              </Timeline.Connector>
              <Timeline.Content paddingBottom={10}>
                <Timeline.Title>
                  {/* <Avatar.Root size="2xs">
                    <Avatar.Image src="https://i.pravatar.cc/150?u=a" />
                    <Avatar.Fallback />
                  </Avatar.Root> */}
                  <HStack width={'100%'}>
                    <Text width="15%" fontSize={'2xl'}>12.30 AM</Text>
                    <Span width={'auto'} marginX={1} />
                    <Text width={'80%'} fontSize={'xl'}>Panel Discussion: Cost to Serve: Deliver Customer Delight</Text>
                  </HStack>
                </Timeline.Title>
                <Card.Root size="md" variant={'elevated'}>
                  <Card.Body textStyle="md" lineHeight="tall">
                    <Span color="fg.muted">Narendra Mistry, Chief Product and Technology Officer, Finastra Universal Banking</Span>
                    <Span color="fg.muted">Shehab Moustafa, Country Center of Excellence Director, Money Fellows;</Span>
                    <Span color="fg.muted">Matthew Hughes, Head of FS&I, International Markets, Atos Emad Shawky Habib Hanna, Chief Data and Analytics Officer, Banque Misr.</Span>
                  </Card.Body>
                  <Card.Footer>
                    <Button size="xs" variant="surface" rounded="md">
                      👏 2
                    </Button>
                  </Card.Footer>
                </Card.Root>

              </Timeline.Content>
            </MotionTimelineItem>

            {/* 9 */}
            <MotionTimelineItem
              initial='hidden' 
              variants={topAnimationGrid9} 
              whileInView='visible' 
              viewport={{ once: false }}
            >
              <Timeline.Connector>
                <Timeline.Separator />
                <Timeline.Indicator>
                  <Icon fontSize="xs">
                    <LuPen />
                  </Icon>
                </Timeline.Indicator>
              </Timeline.Connector>
              <Timeline.Content paddingBottom={10}>
                <Timeline.Title>
                  {/* <Avatar.Root size="2xs">
                    <Avatar.Image src="https://i.pravatar.cc/150?u=a" />
                    <Avatar.Fallback />
                  </Avatar.Root> */}
                  <HStack width={'100%'}>
                    <Text width="15%" fontSize={'2xl'}>01.00 AM</Text>
                    <Span width={'auto'} marginX={1} />
                    <Text width={'80%'} fontSize={'xl'}>The Essential Elements: What do you need to be "all things to all people"?</Text>
                  </HStack>
                </Timeline.Title>
                <Span color="fg.muted">Narendra Mistry, Chief Product and Technology Officer, Finastra Universal Banking</Span>
              </Timeline.Content>
            </MotionTimelineItem>

            {/* 10 */}
            <MotionTimelineItem
              initial='hidden' 
              variants={topAnimationGrid10} 
              whileInView='visible' 
              viewport={{ once: false }}
            >
              <Timeline.Connector>
                <Timeline.Separator />
                <Timeline.Indicator>
                  <Icon fontSize="xs">
                    <LuPen />
                  </Icon>
                </Timeline.Indicator>
              </Timeline.Connector>
              <Timeline.Content paddingBottom={10}>
                <Timeline.Title>
                  {/* <Avatar.Root size="2xs">
                    <Avatar.Image src="https://i.pravatar.cc/150?u=a" />
                    <Avatar.Fallback />
                  </Avatar.Root> */}
                  <HStack width={'100%'}>
                    <Text width="15%" fontSize={'2xl'}>01.30 AM</Text>
                    <Span width={'auto'} marginX={1} />
                    <Text width={'80%'} fontSize={'xl'}>Making the case for change: The Question is How</Text>
                  </HStack>
                </Timeline.Title>
                <Span color="fg.muted">Marwan Abouzeid, Principal Solutions Consultant & Customer Value Lead, MEA & APAC, Finastra Universal Banking</Span>
              </Timeline.Content>
            </MotionTimelineItem>

            {/* 11 */}
            <MotionTimelineItem
              initial='hidden' 
              variants={topAnimationGrid11} 
              whileInView='visible' 
              viewport={{ once: false }}
            >
              <Timeline.Connector>
                <Timeline.Separator />
                <Timeline.Indicator>
                  <Icon fontSize="xs">
                    <LuPen />
                  </Icon>
                </Timeline.Indicator>
              </Timeline.Connector>
              <Timeline.Content paddingBottom={10}>
                <Timeline.Title>
                  {/* <Avatar.Root size="2xs">
                    <Avatar.Image src="https://i.pravatar.cc/150?u=a" />
                    <Avatar.Fallback />
                  </Avatar.Root> */}
                  <HStack width={'100%'}>
                    <Text width="15%" fontSize={'2xl'}>01.50 AM</Text>
                    <Span width={'auto'} marginX={1} />
                    <Text width={'80%'} fontSize={'xl'}>Closing Remarks</Text>
                  </HStack>
                </Timeline.Title>
                <Span color="fg.muted">Rudy Kawmi, Managing Director - Middle East, Africa & Asia-Pacific, Finastra Universal Banking</Span>
              </Timeline.Content>
            </MotionTimelineItem>

            {/* 12 */}
            <MotionTimelineItem
              initial='hidden' 
              variants={topAnimationGrid12} 
              whileInView='visible' 
              viewport={{ once: false }}
            >
              <Timeline.Connector>
                <Timeline.Separator />
                <Timeline.Indicator bg="teal.solid" color="teal.contrast">
                  <Icon fontSize="xs">
                    <LuTicket />
                  </Icon>
                </Timeline.Indicator>
              </Timeline.Connector>
              <Timeline.Content paddingBottom={10}>
                <Timeline.Title>
                  {/* <Avatar.Root size="2xs">
                    <Avatar.Image src="https://i.pravatar.cc/150?u=a" />
                    <Avatar.Fallback />
                  </Avatar.Root> */}
                  <HStack width={'100%'}>
                    <Text width="15%" fontSize={'2xl'}>02.00 AM</Text>
                    <Span width={'auto'} marginX={1} />
                    <Text width={'80%'} fontSize={'xl'}>Lunch</Text>
                  </HStack>
                </Timeline.Title>
              </Timeline.Content>
            </MotionTimelineItem>

          </Timeline.Root>
        </GridItem>
      </SimpleGrid>
    </MotionBox>
  );
};

export default Agenda;
