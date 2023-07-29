import { createStyles, rem } from '@mantine/core';

const styles = createStyles(() => {
  return {
    googleAuthButton: {
      width: '100%',
      borderRadius: rem(50),
      margin: '1rem 0',
      height: rem(48),
      borderColor: '#F1F1F1',
    },
  };
});

export const useStyles = () => {
  return styles();
};
