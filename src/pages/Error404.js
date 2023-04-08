import {
  Flex,
  Center,
  VStack,  
  Heading} from '@chakra-ui/react';

const Error404 = () => {
  //const bg = useColorModeValue('gray.200', 'gray.900')
  // 100vw and 100vh
  return (
    <Flex
      width={'100vw'}
      height={'60vh'}
      alignContent={'center'}
      justifyContent={'center'}
    >
      <Center>
        <VStack>
          <Heading as='h2' size='2xl'>
            Not Found: 404
          </Heading>
        </VStack>  
      </Center>
    </Flex>
  );
};

export default Error404;
