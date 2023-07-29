import { Box } from '@mantine/core';
import { MessageCard } from './Message';
import { TodayLabel } from './TodayLabel';
import { useContext, useEffect, useRef } from 'react';
import { ChatContext } from '@/context/ChatContext';

export const Messages = () => {
  const {
    chatDetails: { prevMessages, todayMessages },
  } = useContext(ChatContext);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    listRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [todayMessages]);

  return (
    <Box h="100%" py={8} display={{ base: 'none', sm: 'block' }}>
      {prevMessages.map((message) => (
        <MessageCard key={message.id} message={message} />
      ))}
      <TodayLabel />
      {todayMessages.map((message) => (
        <MessageCard key={message.id} message={message} />
      ))}
      <div ref={listRef} />
    </Box>
  );
};
