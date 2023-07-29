import { Chatter } from '@/model';
import {
  Avatar,
  Badge,
  Box,
  Flex,
  Indicator,
  MantineTheme,
  Text,
} from '@mantine/core';

type ChatProps = {
  chat: Chatter;
};
export const Chat = ({ chat }: ChatProps) => {
  const { name, imageUrl, online, time, unreadMessages, readMessages } = chat;

  return (
    <Flex px="sm" gap="sm" py="sm" sx={chatStyles}>
      <Indicator
        inline
        size={14}
        offset={7}
        position="bottom-end"
        color={online ? 'green' : 'gray.5'}
        withBorder
      >
        <Avatar src={imageUrl} alt={name} />
      </Indicator>
      <Box sx={{ flexGrow: 1 }}>
        <Flex justify="space-between">
          <Text>{name}</Text>
          <Text color="gray.6" size="sm">
            {time}
          </Text>
        </Flex>
        <Flex justify="space-between">
          <Text size="sm" lineClamp={1}>
            {unreadMessages.length > 0 ? (
              unreadMessages[unreadMessages.length - 1]
            ) : (
              <Text component="span" color="gray.6">
                {readMessages[readMessages.length - 1] || 'Hello'}
              </Text>
            )}
          </Text>

          {unreadMessages.length > 0 && (
            <Badge variant="filled" w={24} h={24} p={0} color="primary.3">
              <Text color="dark">{unreadMessages.length}</Text>
            </Badge>
          )}
        </Flex>
      </Box>
    </Flex>
  );
};

const chatStyles = (theme: MantineTheme) => {
  return {
    '&:hover': {
      transition: 'all .3s',
      cursor: 'pointer',
      backgroundColor: theme.colors.gray[1],
    },
  };
};
