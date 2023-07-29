import { allChatters } from '@/data/all-chatters';
import { ScrollArea } from '@mantine/core';
import { Chat } from './Chat';

export const AllChats = () => {
  return (
    <ScrollArea h="100%" scrollbarSize={8}>
      {allChatters.map((chat) => (
        <Chat key={chat.id} chat={chat} />
      ))}
    </ScrollArea>
  );
};
