import {
  FormLabel,
  FormControl,
  Input,
  FormHelperText,
  useColorModeValue,
  FormErrorMessage,
  Button,
  useDisclosure,
  Modal,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  Text,
  ModalCloseButton,
  Card,
  CardBody,
  Stack,
  StackDivider,
  Box,
  Heading,
  HStack,
  useBoolean,
  Image
} from '@chakra-ui/react';
import { useState } from 'react';
import { MdQuestionAnswer } from "react-icons/md"

const FormModal = () => {
  const bg = useColorModeValue('gray.200', 'gray.900');
  const variant = useColorModeValue('solid', 'outline');
  const [input, setInput] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showHelp, toggleHelp] = useBoolean();
  const handleInputChange = e => setInput(e.target.value);

  const isError =
    (!input.match('@') || !input.match('.com')) & (input.length > 0);

  return (
    <>
      <FormControl>
        <FormLabel>Full Name</FormLabel>
        <Input bg={bg} type="name" />
        <FormHelperText>This will be the name for the ticket.</FormHelperText>
      </FormControl>
      <FormControl>
        <FormLabel>Phone Number </FormLabel>
        <Input bg={bg} type="tele" />
      </FormControl>
      <FormControl>
        <FormLabel>Model Number</FormLabel>
        <Button
          onClick={toggleHelp.toggle}
          size="sm"
          mb="2"
          leftIcon={<MdQuestionAnswer />}
          colorScheme="blue"
          variant={variant}
        >
          How do I find this?
        </Button>
        <Input bg={bg} type="model" />
      </FormControl>
      <FormControl isInvalid={isError}>
        <FormLabel>Email Address</FormLabel>
        <Input onChange={handleInputChange} bg={bg} type="email" />
        <FormErrorMessage>Email is required.</FormErrorMessage>
      </FormControl>
      <Button
        onClick={onOpen}
        isDisabled={false}
        mt={2}
        colorScheme="teal"
        variant="solid"
      >
        Submit ticket now
      </Button>
      <Modal
        closeOnOverlayClick={true}
        isCentered
        isOpen={showHelp}
        onClose={toggleHelp.toggle}
      >
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Box boxSize="lg">
              <Image src="j5box.png" alt="j5 box" />
            </Box>
            <Box boxSize="lg">
              <Image src="j5boxcircle.png" alt="j5 box" />
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Modal
        closeOnOverlayClick={false}
        isCentered
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay
          bg="blackAlpha.300"
          backdropFilter="blur(10px) hue-rotate(90deg)"
        >
          <ModalContent>
            <ModalHeader bg="green.500">Ticket submission</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text fontSize="2xl" as="b">
                Your ticket was submitted!
              </Text>
              <Text>Your ticket has been submitted to our team! We will reach out shortly!</Text>
              <Card variant="outline">
                <CardBody>
                  <Stack divider={<StackDivider />} spacing="4">
                    <Box>
                      <Heading size="xs">Ticket ID</Heading>
                      <HStack>
                        <Text pt="2" fontSize="sm">
                          151895783975192857
                        </Text>
                        <Button size="xs" colorScheme="blue">
                          Copy ID
                        </Button>
                      </HStack>
                    </Box>
                    <Box>
                      <Heading size="xs">Ticket Summary</Heading>
                      <Text pt="2" fontSize="sm">
                        Wanted pizza
                      </Text>
                    </Box>
                  </Stack>
                </CardBody>
              </Card>
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </ModalOverlay>
      </Modal>
    </>
  );
};
export default FormModal;
