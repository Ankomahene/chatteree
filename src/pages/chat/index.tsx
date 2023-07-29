import { useEffect, useState } from 'react';
import { EmptyChat } from './EmptyChat';
import { ExistingChat } from './ExistingChat';
import { Flex, Loader, LoadingOverlay, Text } from '@mantine/core';

const ChatPage = () => {
  const [show, setShow] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 4000);
  }, []);

  useEffect(() => {
    if (show) {
      setTimeout(() => {
        setVisible(true);
        setShow(false);
      }, 4000);
    }
  }, [show]);

  return (
    <>
      <LoadingOverlay loader={<Spinner />} visible={show} overlayBlur={1} />
      {visible ? <ExistingChat /> : <EmptyChat />}
    </>
  );
};

export default ChatPage;

const Spinner = () => (
  <Flex direction="column" justify="center" align="center">
    <Loader color="primary.3" />
    <Text my="sm" fw="bold">
      You will be redirected to a Existing chat shortly.
    </Text>
    <Text my="md">This is for Testing purposes</Text>
  </Flex>
);
