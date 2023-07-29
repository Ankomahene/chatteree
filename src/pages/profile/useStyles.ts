import { createStyles, rem } from '@mantine/core';

const styles = createStyles((theme) => {
  return {
    profileContainerWrapper: {
      width: rem(240),
      height: rem(240),
      borderRadius: '50%',
      borderColor: '#F1F1F1',
      borderWidth: '1px',
      borderStyle: 'solid',
      margin: '2rem 0',
      boxSizing: 'border-box',
      padding: '1rem',
      position: 'relative',
    },

    profileContainer: {
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      borderColor: '#F1F1F1',
      borderWidth: '1px',
      borderStyle: 'solid',
    },

    uploadBtn: {
      display: 'flex',
      width: '165px',
      padding: '0.5rem 1rem',
      backgroundColor: '#fff',
      color: theme.colors.dark[8],
      boxShadow: theme.shadows.sm,
      border: '1px solid #F1F1F1',
      borderRadius: theme.radius.xl,
      position: 'absolute',
      bottom: -10,
      left: '50%',
      transform: 'translate(-50%, -50%)',
      fontSize: '14px',

      transition: 'all .3s',
      '&:hover': {
        backgroundColor: '#F1F1FF',
      },

      '.icon': {
        lineHeight: 1,
      },
    },
  };
});

export const useStyles = () => {
  return styles();
};
