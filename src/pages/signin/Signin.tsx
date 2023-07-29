import { Heading } from '@/components/Heading';
import {
  Box,
  Button,
  Divider,
  Flex,
  Image,
  Input,
  Text,
  rem,
} from '@mantine/core';
import { useStyles } from './useStyles';
import { FcGoogle } from 'react-icons/fc';
import { Logo } from '@/components/Logo';
import { useGlobalStyles } from '@/hooks/useGlobalStyles';
import { useContext, useState } from 'react';
import { ProfileContext } from '@/context/ProfileContext';
import { SignInContext } from '@/context/SignInContext';

export const Signin = () => {
  const {
    profileDetails: { email },
    setProperty,
  } = useContext(ProfileContext);
  const { setSigninState } = useContext(SignInContext);
  const { classes: globalClasses } = useGlobalStyles();
  const { classes } = useStyles();
  const [error, setError] = useState(false);

  const handleNextPage = () => {
    if (email) {
      setSigninState({
        screen: 'verify',
        action: 'next',
      });
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <Flex
      className={globalClasses.container}
      justify="center"
      direction={{ base: 'column', md: 'row' }}
    >
      <Box w={{ base: rem(320), md: rem(530) }}>
        <Image fit="contain" src="assets/img.svg" ml={-24} />
      </Box>

      <Box w={360}>
        <Logo />
        <Heading text="Howdy chatter! Your peeps are waiting" />
        <Text color="gray.6" my={12}>
          Enter your email address to start chatting
        </Text>

        <Input.Description py={8} className={globalClasses.inputLabel}>
          Email address
        </Input.Description>
        <Input
          value={email}
          onChange={(e) => setProperty('email', e.target.value)}
          type="email"
          radius="xl"
          required
        />
        {error && <Input.Error>Enter email address</Input.Error>}

        <Flex justify="flex-end">
          <Button className={globalClasses.mainButton} onClick={handleNextPage}>
            Next
          </Button>
        </Flex>
        <Divider color="#F1F1F1" />
        <Button variant="default" className={classes.googleAuthButton}>
          <Text component="span" size="lg" mx="sm" mb={-6}>
            <FcGoogle />
          </Text>
          Continue with Google
        </Button>
      </Box>
    </Flex>
  );
};
