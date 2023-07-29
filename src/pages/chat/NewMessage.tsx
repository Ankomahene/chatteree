import { formatTimeTo12HourFormat, roundedButtonStyles } from '@/helpers';
import { Button, Flex, Footer, Textarea } from '@mantine/core';
import { BsSend } from 'react-icons/bs';
import { Attachments } from './Attachments';
import { useState, useContext } from 'react';
import { ChatContext } from '@/context/ChatContext';
import { v4 as uid } from 'uuid';
import { user } from '@/data/messages';
import { ProfileContext } from '@/context/ProfileContext';

export const NewMessage = () => {
  const { addMessage } = useContext(ChatContext);
  const { profileDetails } = useContext(ProfileContext);
  const [newMessage, setNewMessage] = useState('');

  const handleAddNewMessage = () => {
    if (newMessage) {
      addMessage({
        id: uid(),
        message: newMessage,
        time: formatTimeTo12HourFormat(),
        user: {
          id: profileDetails.chattereeId || user.id,
          name: profileDetails.name || user.name,
          imageUrl: profileDetails.imageUrl || user.imageUrl,
        },
      });
      setNewMessage('');
    }
  };

  return (
    <Footer height={80} p="md">
      <Flex pos="relative">
        <Textarea
          placeholder="Type your message"
          radius="xl"
          variant="filled"
          minRows={1}
          sx={{ flexGrow: 1 }}
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <Attachments />
        <Button
          onClick={handleAddNewMessage}
          w={48}
          h={48}
          radius="xl"
          styles={roundedButtonStyles}
        >
          <BsSend size="1.2rem" />
        </Button>
      </Flex>
    </Footer>
  );
};
