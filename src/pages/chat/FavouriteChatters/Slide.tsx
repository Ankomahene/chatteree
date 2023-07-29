import { Carousel } from '@mantine/carousel';
import { useStyles } from '../useStyles';
import { Avatar, Indicator, Text } from '@mantine/core';
import { Chatter } from '@/model';

type SlideProps = {
  favoriteChatter: Chatter;
};
export const Slide = ({ favoriteChatter }: SlideProps) => {
  const { imageUrl, name, unreadMessages } = favoriteChatter;
  const { classes } = useStyles();

  return (
    <Carousel.Slide className={classes.slideStyles}>
      <Indicator
        inline
        label={<Text color="dark">{unreadMessages.length}</Text>}
        size={20}
        color="primary.3"
        position="top-end"
        offset={12}
        disabled={unreadMessages.length === 0}
      >
        <Avatar
          className="photo"
          src={imageUrl}
          alt={name}
          my="sm"
          radius="xl"
        />
      </Indicator>
      <Text size="sm" w="100%" px={5} truncate>
        {name}
      </Text>
    </Carousel.Slide>
  );
};
