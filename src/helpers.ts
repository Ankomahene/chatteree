import { MantineTheme, rem } from '@mantine/core';

export const roundedButtonStyles = (theme: MantineTheme) => ({
  root: {
    width: rem(48),
    height: rem(48),
    backgroundColor: theme.colors.blackPearl[9],
    color: theme.colors.primary[3],
    padding: '5px',
    ':hover': {
      backgroundColor: theme.colors.blackPearl[8],
    },
  },
});

export const getDefaultChatterDetails = (
  name: string,
  id: string,
  imageUrl: string
) => {
  return {
    name,
    id,
    imageUrl,
    unreadMessages: [],
    readMessages: [],
    favorite: false,
    online: true,
    time: formatTimeTo12HourFormat(),
  };
};

/**
 * Formats the current time to a 12-hour format.
 *
 * @return {string} The formatted time in the format 'HH:MMam/pm'.
 */
export const formatTimeTo12HourFormat = (): string => {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const ampm = hours >= 12 ? 'pm' : 'am';

  // Convert to 12-hour format
  hours = hours % 12 || 12;

  // Add leading zeros to minutes if needed
  const newMinutes = minutes < 10 ? '0' + minutes : minutes;

  // Concatenate the formatted time
  const formattedTime = `${hours}:${newMinutes}${ampm}`;
  return formattedTime;
};

export function formatDate(date: Date) {
  const options: any = { day: 'numeric', month: 'long', year: 'numeric' };
  return new Intl.DateTimeFormat('en-GB', options).format(date);
}

export const buildImageUrlFromFile = (file: File) => {
  let imageUrl = '';
  if (file) {
    const reader = new FileReader();
    reader.onloadend = () => {
      imageUrl = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  return imageUrl;
};
