import { ProfileContext } from '@/context/ProfileContext';
import { user as defaultUser } from '@/data/messages';
import { Message } from '@/model';
import { Avatar, Box, Flex, Image, Text } from '@mantine/core';
import { useContext, useState } from 'react';

type MessageProps = {
  message: Message;
};

export const MessageCard = ({ message }: MessageProps) => {
  const {
    profileDetails: { name: username, imageUrl },
  } = useContext(ProfileContext);
  const { message: text, time, user } = message;
  const [isOwnMessage] = useState(
    defaultUser.name === user.name || username === user.name
  );

  return (
    <Flex gap={8} direction={isOwnMessage ? 'row-reverse' : 'row'} my="sm">
      <Avatar
        miw={36}
        maw={36}
        h={36}
        size="14px"
        src={(isOwnMessage && imageUrl) || user.imageUrl}
        alt={user.name}
        radius="xl"
      />
      <Box>
        <Box
          sx={(theme) => ({
            borderRadius: '50px',
            backgroundColor: isOwnMessage
              ? theme.colors.blackPearl[9]
              : theme.colors.gray[2],
          })}
          py={6}
          pl={18}
          pr={36}
        >
          <Text
            align={isOwnMessage ? 'right' : 'left'}
            size={11}
            color={isOwnMessage ? 'gray.5' : 'gray.6'}
          >
            {time}
          </Text>
          <Text
            align={isOwnMessage ? 'right' : 'left'}
            color={isOwnMessage ? 'white' : 'dark'}
          >
            {text}
          </Text>
        </Box>
        {message.image && (
          <Image
            src={message.image}
            miw="200px"
            maw="200px"
            radius="md"
            mt={6}
          />
        )}
      </Box>
    </Flex>
  );
};
