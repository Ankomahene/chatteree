import { allChatters } from '@/data/all-chatters';
import { prevMessages, todayMessages } from '@/data/messages';
import { Chatter, Message } from '@/model';
import { useLocalStorage } from '@mantine/hooks';
import { ReactNode, createContext } from 'react';

export interface IChatContext {
  chatDetails: IChatDetails;
  addMessage: (message: Message) => void;
  addChatter: (chatter: Chatter) => void;
}

interface IChatDetails {
  prevMessages: Message[];
  todayMessages: Message[];
  allChatters: Chatter[];
}

export const ChatContext = createContext<IChatContext>(null as any);

const defaultValue: IChatDetails = {
  prevMessages,
  todayMessages,
  allChatters,
};

type ProviderProps = {
  children: ReactNode;
};
export const ChatContextProvider = ({ children }: ProviderProps) => {
  const [chatDetails, setChatDetails] = useLocalStorage({
    key: 'chatteree-chat-info',
    defaultValue,
  });

  const addMessage = (newMessage: Message) => {
    setChatDetails({
      ...chatDetails,
      todayMessages: [...chatDetails.todayMessages, newMessage],
    });
  };

  const addChatter = (newChatter: Chatter) => {
    setChatDetails({
      ...chatDetails,
      allChatters: [...chatDetails.allChatters, newChatter],
    });
  };

  return (
    <ChatContext.Provider value={{ chatDetails, addMessage, addChatter }}>
      {children}
    </ChatContext.Provider>
  );
};
