import { Box, Flex, Container, colorScheme, HStack, IconButton } from '@chakra-ui/react'
import { SiTinder } from 'react-icons/si';
import { MdOutlineSportsKabaddi, MdPerson} from 'react-icons/md';
import Link from 'next/link';

const NavigationBar = () => {

  return (
    <>
    <Flex as="footer" position="fixed" bottom="0" w="100%">
      <Box bg='lightblue' w='100%' p={2} px={3}>
        <HStack justify="space-around">
          <Link href='/eventfeed' passHref>
            <IconButton aria-label='Event Feed' icon={<SiTinder/>} size="lg" colorScheme='blue' variant='ghost' />
          </Link>
          <IconButton aria-label='Your Events' icon={<MdOutlineSportsKabaddi boxSize=""/>} size="lg" colorScheme='blue' variant='ghost' />
          <Link href="/profile" passHref>
          <IconButton aria-label='Profile' icon={<MdPerson  />} size="lg" colorScheme='blue' variant='ghost' />
          </Link>
        </HStack>
      </Box>
    </Flex>
   </>
  );
}; 

export default NavigationBar;