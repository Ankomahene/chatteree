import { Carousel } from '@mantine/carousel';
import { Slide } from './Slide';
import { useContext } from 'react';
import { ChatContext } from '@/context/ChatContext';

export function ChatSlider() {
  const {
    chatDetails: { allChatters },
  } = useContext(ChatContext);
  const favourites = allChatters.filter((chatter) => chatter.favorite);

  return (
    <Carousel
      height={100}
      slideSize="33.333333%"
      slideGap="sm"
      loop
      align="start"
      slidesToScroll={4}
    >
      {favourites.map((favourite) => (
        <Slide key={favourite.id} favoriteChatter={favourite} />
      ))}
    </Carousel>
  );
}
