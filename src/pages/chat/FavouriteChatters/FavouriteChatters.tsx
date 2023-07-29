import { Box, Flex, Text } from '@mantine/core';
import { ChatSlider } from './ChatSlider';
import { ChatContext } from '@/context/ChatContext';
import { useContext } from 'react';

export const FavouriteChatters = () => {
  const {
    chatDetails: { allChatters },
  } = useContext(ChatContext);
  const favourites = allChatters.filter((chatter) => chatter.favorite);

  return (
    <Box p="md">
      <Flex justify="space-between" py="sm">
        <Text color="gray.6">Favourite chatters</Text>
        <Text color="gray.6">{favourites.length}</Text>
      </Flex>
      <ChatSlider />
    </Box>
  );
};
