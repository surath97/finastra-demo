import { HStack, Button, Image, Text, Link, VStack } from "@chakra-ui/react";
import cogent_logo_1 from '../assets/logo/cogent-logo-01.png'

interface Props {
  onClickBtn: () => void;
  onClickBtn2: () => void;
  onClickBtn3: () => void;
}

const NavBar = ({ onClickBtn, onClickBtn2, onClickBtn3 }: Props) => {
  
  return (
    <>
      <HStack maxWidth='breakpoint-lg' paddingX={{ base: '2%'}} marginX='auto' className="justify-between">
        <Image src={cogent_logo_1} height={{ base: '40px', md: '50px', xl: '60px'}} objectFit="cover" />
        <HStack hideBelow="md" gapX={5}>
          <Link onClick={onClickBtn}><Text className="text-[#878787]" textStyle="md">Event Overview</Text></Link>
          <Link onClick={onClickBtn2}><Text className="text-[#878787]" textStyle="md">Agenda</Text></Link>
        </HStack>
        <Button 
          size={{ base: 'xs', md: 'lg'}} 
          className="!bg-transparent hover:scale-110 hover:shadow-amber-500 hover:shadow-xl !border !border-[#878787] !rounded-4xl !text-base"
          onClick={onClickBtn3}
        >
          Register Now
        </Button>
      </HStack>
      <VStack hideFrom="md" gapX={5} paddingX={10} paddingY={5} >
        <Link onClick={onClickBtn}><Text className="text-[#878787]" textStyle="md">Event Overview</Text></Link>
        <Link onClick={onClickBtn2}><Text className="text-[#878787]" textStyle="md">Agenda</Text></Link>
      </VStack>
    </>
  );
};

export default NavBar;
