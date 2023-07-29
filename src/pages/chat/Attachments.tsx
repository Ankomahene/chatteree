import { ActionIcon, Group } from '@mantine/core';
import { BsEmojiSmile, BsMic } from 'react-icons/bs';
import { AttachmentMenu } from './AttachmentMenu';

export const Attachments = () => {
  return (
    <Group
      spacing={2}
      sx={(theme) => ({
        backgroundColor: theme.colors.gray[1],
        borderRadius: theme.radius.xl,
        borderTopLeftRadius: '0',
        borderBottomLeftRadius: '0',
        padding: '0 1rem',
        marginLeft: '-20px',
        marginRight: theme.spacing.sm,
        position: 'static',
        zIndex: 10,
      })}
    >
      <ActionIcon variant="transparent" color="dark.3">
        <BsEmojiSmile size="1rem" />
      </ActionIcon>
      <AttachmentMenu />
      <ActionIcon variant="transparent">
        <BsMic size="1rem" />
      </ActionIcon>
    </Group>
  );
};
