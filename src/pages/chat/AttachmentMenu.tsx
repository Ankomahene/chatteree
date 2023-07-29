import { ActionIcon, Avatar, Flex, Menu, Text } from '@mantine/core';
import { BsPerson } from 'react-icons/bs';
import { GrDocumentText } from 'react-icons/gr';
import { ImAttachment } from 'react-icons/im';
import { PiFileAudioLight, PiImagesThin } from 'react-icons/pi';

export const AttachmentMenu = () => {
  return (
    <Menu shadow="md">
      <Menu.Target>
        <ActionIcon variant="transparent" color="dark.3">
          <ImAttachment size="1rem" />
        </ActionIcon>
      </Menu.Target>

      <Menu.Dropdown ml={-16}>
        <Flex>
          <Menu.Item>
            <Avatar bg="gray.3" color="gray.7" radius="xl">
              <PiImagesThin size="1.2rem" />
            </Avatar>
            <Text align="center">Image</Text>
          </Menu.Item>
          <Menu.Item>
            <Avatar bg="gray.3" color="gray.7" radius="xl">
              <PiFileAudioLight size="1.2rem" />
            </Avatar>
            <Text align="center">Audio</Text>
          </Menu.Item>
          <Menu.Item>
            <Avatar bg="gray.3" color="gray.7" radius="xl">
              <GrDocumentText size="1rem" />
            </Avatar>
            <Text align="center">Doc</Text>
          </Menu.Item>
          <Menu.Item>
            <Avatar bg="gray.3" color="gray.7" radius="xl">
              <BsPerson size="1.2rem" />
            </Avatar>
            <Text align="center">Contact</Text>
          </Menu.Item>
        </Flex>
      </Menu.Dropdown>
    </Menu>
  );
};
