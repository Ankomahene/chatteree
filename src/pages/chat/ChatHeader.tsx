import { ActionIcon, Avatar, Box, Flex, Header, Text } from '@mantine/core';
import { useState } from 'react';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { UserMenu } from './UserMenu';
import { chatter } from '@/data/messages';

export const ChatHeader = () => {
  const [liked, setLiked] = useState(false);

  return (
    <Header height={70} px="lg" py="sm">
      <Flex justify="space-between" align="center">
        <Flex gap={8}>
          <Avatar src={chatter.imageUrl} alt={chatter.name} />
          <Box>
            <Text>{chatter.name}</Text>
            <Text color="green">online</Text>
          </Box>
        </Flex>

        <Flex align="center" gap={16}>
          <ActionIcon
            onClick={() => setLiked(!liked)}
            variant="transparent"
            color={liked ? 'primary.3' : 'dark'}
          >
            {liked ? <BsHeartFill size="1.2rem" /> : <BsHeart size="1.2rem" />}
          </ActionIcon>
          <UserMenu />
        </Flex>
      </Flex>
    </Header>
  );
};
