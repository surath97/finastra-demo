import { HStack, Button, Image, Text, Link } from "@chakra-ui/react";
import cogent_logo_1 from '../assets/logo/cogent-logo-01.png'

const NavBar = () => {
  
  return (
    <HStack maxWidth='breakpoint-lg' paddingX={{ base: '2%'}} marginX='auto' className="justify-between">
      <Image src={cogent_logo_1} height={{ base: '40px', md: '50px', xl: '60px'}} objectFit="cover" />
      <HStack hideBelow="md">
        <Link><Text className="text-[#878787]" textStyle="sm">Event Overview</Text></Link>
        <Link><Text className="text-[#878787]" textStyle="sm">Agenda</Text></Link>
      </HStack>
      <Button size={{ base: 'xs', md: 'lg'}} className="!bg-transparent hover:scale-110 hover:shadow-amber-500 hover:shadow-xl !border !border-[#878787] !rounded-4xl !text-base">
        Register Now
      </Button>
    </HStack>
  );
};

export default NavBar;
