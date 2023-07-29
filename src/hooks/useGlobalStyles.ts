import { createStyles, rem } from '@mantine/core';

const globalStyles = createStyles((theme) => ({
  container: {
    height: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '4rem',
  },

  mainButton: {
    backgroundColor: theme.colors.blackPearl[9],
    color: theme.colors.primary[3],
    padding: '12px 24px',
    height: rem(48),
    borderRadius: rem(50),
    margin: '1.5rem 0',
    transition: 'all .3s',
    '&:hover': {
      backgroundColor: theme.colors.blackPearl[8],
    },
  },
  inputLabel: {
    fontSize: '14px',
  },
}));

export const useGlobalStyles = () => {
  // invoking global styles will return 3 properties [classes, cx, theme] which can be destructured
  return globalStyles();
};
