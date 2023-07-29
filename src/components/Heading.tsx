import { Text, createStyles, rem } from '@mantine/core';

interface Props {
  text: string;
}

const useStyles = createStyles(() => {
  return {
    title: {
      letterSpacing: -2,
      lineHeight: rem(46),
      fontWeight: 600,
    },
  };
});

export const Heading = ({ text }: Props) => {
  const { classes } = useStyles();

  return (
    <Text className={classes.title} size={36} color="blackPearl.9" my={8}>
      {text}
    </Text>
  );
};
