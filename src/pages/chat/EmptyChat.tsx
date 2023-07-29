import { AppShell, Flex, Navbar, Text } from '@mantine/core';
import { CurrentUser } from './CurrentUser';
import { Search } from './Search';
import { layoutStyles } from './useStyles';
import { MessagesPlaceholder } from './MessagesPlaceholder';
import { PiChatsCircleLight } from 'react-icons/pi';

export const EmptyChat = () => {
  return (
    <AppShell
      padding="md"
      styles={layoutStyles}
      layout="alt"
      navbar={
        <Navbar width={{ base: '100%', sm: 300, md: 400 }} p="xs">
          <CurrentUser />
          <Search />
          <Flex h="100%" justify="center" align="center">
            <Text color="gray.4" align="center" maw="230px">
              <PiChatsCircleLight size="4rem" />
              <br />
              Your Chatteree conversations live here
            </Text>
          </Flex>
        </Navbar>
      }
    >
      <MessagesPlaceholder />
    </AppShell>
  );
};
