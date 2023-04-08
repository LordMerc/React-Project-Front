import { Outlet } from 'react-router-dom';
import {
  useColorMode,
  Text,
  Container,
  Center,
  Link,
  HStack,
  Button,
} from '@chakra-ui/react';
import { BsSun, BsMoon } from 'react-icons/bs';
import { ExternalLinkIcon } from '@chakra-ui/icons';
const Layout = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <header>
        <Button
          leftIcon={colorMode === 'light' ? <BsMoon /> : <BsSun />}
          onClick={toggleColorMode}
        >
          Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
        </Button>
      </header>
      <Outlet />
      <Container as="footer" role="contentinfo" py={{ base: '12', md: '16' }}>
        <Center>
          <HStack>
            <Text fontSize="sm" color="subtle">
              Created by
            </Text>
            <Link
              fontSize="sm"
              href="https://www.linkedin.com/in/branden-boyd-ba5325168/"
              isExternal
            >
              Michael Boyd
            </Link>
            <ExternalLinkIcon mx="2px" />
          </HStack>
        </Center>
      </Container>
    </>
  );
};

export default Layout;
