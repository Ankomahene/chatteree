import { Notification, Text } from '@mantine/core';
import { useEffect, useState } from 'react';

type Props = {
  status: 'error' | 'success';
  message: string;
};
export const Alert = ({ status, message }: Props) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
    const timeout = setTimeout(() => {
      setShow(false);
    }, 6000);

    return () => clearTimeout(timeout);
  }, [status]);

  return (
    <Notification
      display={show ? 'inline-block' : 'none'}
      pos="fixed"
      bg={status === 'success' ? 'green' : 'red'}
      color={status === 'success' ? 'green' : 'red'}
      withCloseButton={false}
      sx={{ top: '30px', left: '50%', transform: 'translate(-50%, -50%)' }}
    >
      <Text color="white">{message}</Text>
    </Notification>
  );
};
