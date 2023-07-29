import { Status } from '@/model';
import { Loader, Text } from '@mantine/core';
import { BsCheckCircle } from 'react-icons/bs';
import { VscError } from 'react-icons/vsc';

type Props = {
  status: Status;
  chattereeId: string;
};

export const StatusRenderer = ({ status, chattereeId }: Props) => {
  return (
    <>
      {status === '' && (
        <Text color="gray.5" size="sm">
          {status === '' && 9 - chattereeId.length}
        </Text>
      )}

      {status === 'loading' && <Loader color="gray" size="xs" />}
      {status === 'success' && (
        <Text color="green" title="valid chatteree id">
          <BsCheckCircle size="1.2rem" />
        </Text>
      )}
      {status === 'error' && (
        <Text color="red" size="1.2rem" title="chatteree id already exist">
          <VscError />
        </Text>
      )}
    </>
  );
};
