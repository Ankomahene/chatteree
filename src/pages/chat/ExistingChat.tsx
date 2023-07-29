import { AppShell, Navbar } from '@mantine/core';
import { AllChats } from './AllChats';
import { NewMessage } from './NewMessage';
import { ChatHeader } from './ChatHeader';
import { CurrentUser } from './CurrentUser';
import { FavouriteChatters } from './FavouriteChatters/FavouriteChatters';
import { Messages } from './Messages';
import { Search } from './Search';
import { layoutStyles } from './useStyles';

export const ExistingChat = () => {
  return (
    <AppShell
      padding="md"
      styles={layoutStyles}
      layout="alt"
      header={<ChatHeader />}
      navbar={
        <Navbar width={{ base: '100%', sm: 300, md: 400 }} p="xs">
          <CurrentUser />
          <Search />
          <FavouriteChatters />
          <AllChats />
        </Navbar>
      }
      footer={<NewMessage />}
    >
      <Messages />
    </AppShell>
  );
};
