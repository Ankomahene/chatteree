import { Alert } from '@/components/Alert';
import { Heading } from '@/components/Heading';
import { Logo } from '@/components/Logo';
import { ProfileContext } from '@/context/ProfileContext';
import { useGlobalStyles } from '@/hooks/useGlobalStyles';
import { Box, Button, Flex, Group, Image, PinInput, Text } from '@mantine/core';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BackButton } from './BackButton';

export const VerifyEmail = () => {
  const {
    profileDetails: { email },
  } = useContext(ProfileContext);
  const { classes } = useGlobalStyles();
  const [code, setCode] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  /**
   * Handles the verification of the code.
   *000000 - hardcoded value just to check for error scenario
   */
  const handleVerifyCode = () => {
    if (code === '000000') {
      setIsError(true);
      setIsSuccess(false);
    } else {
      setIsError(false);
      setIsSuccess(true);
      setTimeout(() => {
        navigate('/new-id');
      }, 2000);
    }
  };

  return (
    <>
      {/* This is just to mock alert */}
      {isSuccess && (
        <Alert status="success" message="email verified successfully" />
      )}
      {isError && (
        <Alert status="error" message="incorrect confirmation code" />
      )}

      <Flex className={classes.container} justify="center">
        <Box w={416}>
          <Logo />
          <Heading text="Check your mail" />
          <Text color="gray.6" my={12}>
            Enter the confirmation code sent to{' '}
            <Text component="span" color="gray.9">
              {email}
            </Text>{' '}
            to verify that it is you.
          </Text>
          <Group position="center" grow my="lg">
            <PinInput
              type={/^[0-9]+/}
              length={6}
              inputType="tel"
              inputMode="numeric"
              size="xl"
              variant="filled"
              spacing="xl"
              value={code}
              onChange={(value) => setCode(value)}
            />
          </Group>

          <Flex justify="space-between" align="center">
            <Button variant="subtle" color="blackPearl.9">
              Resend Code
            </Button>
            <Button
              className={classes.mainButton}
              onClick={handleVerifyCode}
              disabled={code.length < 6}
            >
              Verify
            </Button>
          </Flex>

          <Box p="xl" my="xl">
            <Image width="100%" fit="contain" src="assets/illust.svg" />
          </Box>
        </Box>
      </Flex>

      <BackButton screen="signin" />
    </>
  );
};
