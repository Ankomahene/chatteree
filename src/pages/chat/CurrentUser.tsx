import { ProfileContext } from '@/context/ProfileContext';
import { roundedButtonStyles } from '@/helpers';
import { Avatar, Button, ChevronIcon, Flex, Text } from '@mantine/core';
import { useContext } from 'react';
import { TfiPencilAlt } from 'react-icons/tfi';

export const CurrentUser = () => {
  const {
    profileDetails: { name, imageUrl },
  } = useContext(ProfileContext);

  return (
    <Flex justify="space-between" px="sm">
      <Flex align="center" gap="md">
        <Avatar
          src={imageUrl || 'assets/photos/kojo-trip.png'}
          alt={name || 'kojo trip'}
          radius="xl"
        />
        <Flex align="center" gap="xs">
          <Text>{name || 'Kojo Trip'}</Text>
          <ChevronIcon />
        </Flex>
      </Flex>
      <Button w={48} h={48} radius="xl" styles={roundedButtonStyles}>
        <TfiPencilAlt size="1.2rem" />
      </Button>
    </Flex>
  );
};
