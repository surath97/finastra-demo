import { HStack, Button, Image, Text } from "@chakra-ui/react";
import cogent_logo_1 from '../assets/logo/cogent-logo-01.png'

const NavBar = () => {
  
  return (
    <HStack maxWidth='breakpoint-lg' paddingX='16px' marginX='auto' className="justify-between">
      <Image src={cogent_logo_1} height="60px" objectFit="cover" />
      <HStack >
        <Text className="text-[#878787]" textStyle="sm">Event Overview</Text>
        <Text className="text-[#878787]" textStyle="sm">Agenda</Text>
      </HStack>
      <Button className="!bg-transparent hover:bg-sky-700 !border !border-[#878787] !rounded-4xl !text-base !px-5 !py-6">
        Register Now
      </Button>
    </HStack>
  );
};

export default NavBar;
