import { ActionIcon, Menu } from '@mantine/core';
import { CiMenuKebab, CiSettings } from 'react-icons/ci';
import {
  MdOutlineGroupAdd,
  MdBroadcastOnHome,
  MdLaptopMac,
} from 'react-icons/md';

export const UserMenu = () => {
  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <ActionIcon variant="transparent" color="dark">
          <CiMenuKebab size="2rem" />
        </ActionIcon>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item icon={<MdOutlineGroupAdd />}>New group</Menu.Item>
        <Menu.Item icon={<MdBroadcastOnHome />}>New broadcast</Menu.Item>
        <Menu.Item icon={<MdLaptopMac />}>Linked devices </Menu.Item>
        <Menu.Divider />
        <Menu.Item icon={<CiSettings />}>Settings</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};
