import { Heading } from '@/components/Heading';
import { Logo } from '@/components/Logo';
import { ProfileContext } from '@/context/ProfileContext';
import { allChatters } from '@/data/all-chatters';
import { useGlobalStyles } from '@/hooks/useGlobalStyles';
import { Status } from '@/model';
import { Box, Button, Flex, Input, Text } from '@mantine/core';
import { useContext, useEffect, useState } from 'react';
import { FiAtSign } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { StatusRenderer } from './StatusRenderer';

export const ChattereeId = () => {
  const {
    setProperty,
    profileDetails: { chattereeId },
  } = useContext(ProfileContext);
  const { classes } = useGlobalStyles();
  const [status, setStatus] = useState<Status>('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleContinue = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      navigate('/profile');
    }, 2000);
  };

  useEffect(() => {
    if (chattereeId) {
      setStatus('loading');
      const timeout = setTimeout(() => {
        if (!allChatters.some((user) => user.id === chattereeId)) {
          setStatus('success');
        } else {
          setStatus('error');
        }
      }, 1000);
      return () => clearTimeout(timeout);
    } else {
      setStatus('');
    }
  }, [chattereeId]);

  return (
    <Flex className={classes.container}>
      <Box w={416}>
        <Logo />
        <Heading text="A Chatteree ID cos you’re special." />
        <Text color="gray.6" my={12}>
          People will be able to find you with your unique ID
        </Text>
        <Input.Description py={8} className={classes.inputLabel}>
          Chatteree ID
        </Input.Description>
        <Input
          icon={<FiAtSign />}
          maxLength={9}
          rightSection={
            <StatusRenderer chattereeId={chattereeId} status={status} />
          }
          value={chattereeId}
          onChange={(e) => setProperty('chattereeId', e.target.value)}
          radius="xl"
        />
        <Flex justify="flex-end">
          <Button
            onClick={handleContinue}
            disabled={status !== 'success' || isLoading}
            className={classes.mainButton}
          >
            {isLoading ? 'Loading...' : 'Continue'}
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};
