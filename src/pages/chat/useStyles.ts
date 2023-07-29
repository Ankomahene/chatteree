import { MantineTheme, createStyles, rem } from '@mantine/core';

const styles = createStyles((theme) => {
  return {
    slideStyles: {
      maxWidth: rem(72),
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyItems: 'center',
      textAlign: 'center',
      paddingRight: 0,
      borderRadius: theme.radius.xs,

      ':hover': {
        backgroundColor: theme.colors.gray[1],
        cursor: 'pointer',
        transition: 'backgroundColor .5s',
      },
    },
  };
});

export const useStyles = () => {
  return styles();
};

export const layoutStyles = (theme: MantineTheme) => ({
  main: {
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[8]
        : theme.colors.gray[0],
  },
});
