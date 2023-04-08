import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    FormHelperText,
    Flex,
    Center,
    Button,
    VStack,
    useColorModeValue
  } from '@chakra-ui/react';
  import { useState } from 'react';
  const Home = () => {
    const bg = useColorModeValue('gray.400', 'gray.900')
    const [input, setInput] = useState('')
  
    const handleInputChange = (e) => setInput(e.target.value)
  
    const isError = (!input.match("@") || !input.match(".com")) & (input.length > 0)
    // 100vw and 100vh
    return (
      <Flex
        width={'100vw'}
        height={'100vh'}
        alignContent={'center'}
        justifyContent={'center'}
      >
        <Center>
          <VStack>
            <FormControl>
              <FormLabel>Full Name</FormLabel>
              <Input bg={bg} type="name" />
              <FormHelperText>
                This will be the name for the ticket.
              </FormHelperText>
            </FormControl>
            <FormControl isInvalid={isError}>
              <FormLabel>Email Address</FormLabel>
              <Input onChange={handleInputChange} bg={bg} type="email" />
              <FormErrorMessage>Email is required.</FormErrorMessage>
            </FormControl>
            <Button isDisabled mt={2} colorScheme="teal" variant="solid">
              Submit ticket
            </Button>
          </VStack>  
        </Center>
      </Flex>
    );
  };
  
  export default Home;
  