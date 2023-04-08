import {
    Flex,
    Center,
    VStack  } from '@chakra-ui/react';
  import FormModal from '../components/Form';
  const Home = () => {
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
            <FormModal/>
          </VStack>  
        </Center>
      </Flex>
    );
  };
  
  export default Home;
  