import { MantineThemeOverride, rem } from '@mantine/core';

export const theme: MantineThemeOverride = {
  // theme colors should always have 10 shades
  colors: {
    blackPearl: [
      '#EDF3F7',
      '#CDDDEA',
      '#ACC7DC',
      '#8CB0CF',
      '#6C9AC1',
      '#4C84B3',
      '#3C6A90',
      '#2D4F6C',
      '#1E3548',
      '#101C26',
    ],
    primary: [
      '#FEFBE7',
      '#FCF4BB',
      '#FAED8F',
      '#F7E353',
      '#F6DE37',
      '#F4D70B',
      '#C3AC09',
      '#928107',
      '#615605',
      '#312B02',
    ],
  },
  components: {
    Input: {
      styles: () => ({
        input: {
          border: 'none',
          outline: 'none',
          backgroundColor: '#F7F7F7',
          height: rem(48),
          width: '100%',
        },
      }),
    },

    Textarea: {
      styles: (theme) => ({
        input: {
          border: 'none',
          outline: 'none',
          padding: '0.3rem 0',
          paddingRight: '2rem',
          paddingLeft: '1rem',
          borderTopRightRadius: '0px',
          borderBottomRightRadius: '0px',
          backgroundColor: theme.colors.gray[1],
        },
      }),
    },
    Avatar: {
      styles: () => ({
        root: {
          width: rem(48),
          height: rem(48),
        },
      }),
    },
  },
};
