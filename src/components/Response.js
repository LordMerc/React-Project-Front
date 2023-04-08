import { Card, CardBody, CardHeader, Text, Heading, Box, Stack, StackDivider } from '@chakra-ui/react';
const ResponseModal = () => {
  const ticket = 1234;
  return (
    <Card>
      <CardHeader bg="green.600">
        <Heading size="md">Ticket Submitted!</Heading>
      </CardHeader>
      <CardBody>
      <Stack divider={<StackDivider />} spacing='4'>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Ticket ID
        </Heading>
        <Text as="i" pt='2' fontSize='sm'>
          {ticket}
        </Text>
      </Box>
      </Stack>
      </CardBody>
    </Card>
  );
};

export default ResponseModal;
