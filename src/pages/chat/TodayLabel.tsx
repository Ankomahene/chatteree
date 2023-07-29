import { formatDate } from '@/helpers';
import { Text } from '@mantine/core';

const now = new Date();

export const TodayLabel = () => {
  return (
    <Text
      bg="gray.4"
      w="fit-content"
      py="5px"
      px="lg"
      sx={{ borderRadius: '5px' }}
      mx="auto"
      my={32}
    >
      Today {formatDate(now)}
    </Text>
  );
};
