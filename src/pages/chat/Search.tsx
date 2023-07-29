import { Box, Input } from '@mantine/core';
import { CiSearch } from 'react-icons/ci';

export const Search = () => {
  return (
    <Box p="md">
      <Input
        icon={<CiSearch />}
        radius="xl"
        type="search"
        placeholder="Search for chatter or message"
      />
    </Box>
  );
};
