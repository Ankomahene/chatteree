import { ProfileContext } from '@/context/ProfileContext';
import { useGlobalStyles } from '@/hooks/useGlobalStyles';
import { Box, Button, Flex, Image, Text, Title, rem } from '@mantine/core';
import { useContext } from 'react';
import { TfiPencilAlt } from 'react-icons/tfi';

export const MessagesPlaceholder = () => {
  const {
    profileDetails: { name },
  } = useContext(ProfileContext);
  const { classes: globalClasses } = useGlobalStyles();

  return (
    <Box>
      <Box px="lg" py="4rem">
        <Text>Welcome</Text>
        <Title>{name || 'Kojo Trip'}!</Title>
      </Box>
      <Flex
        justify="center"
        align="center"
        direction="column"
        h="100"
        sx={{ minHeight: 'calc(100vh - 16rem)' }}
      >
        <Box w={{ base: rem(320), md: rem(420) }}>
          <Image fit="contain" src="assets/illust-2.svg" />
        </Box>
        <Text>We hear say your mouth die hmmm</Text>

        <Button className={globalClasses.mainButton}>
          <Text mx="sm" color="gray.1">
            <TfiPencilAlt size="1.2rem" />
          </Text>{' '}
          Start chatting
        </Button>
      </Flex>
    </Box>
  );
};
