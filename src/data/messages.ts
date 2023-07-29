import { Message, User } from '@/model';
import { v4 as uid } from 'uuid';

export const user: User = {
  id: uid(),
  name: 'Kojo Trip',
  imageUrl: `assets/photos/kojo-trip.png`,
};

export const chatter: User = {
  id: uid(),
  name: 'Mullah',
  imageUrl: `assets/photos/mullah.png`,
};

export const prevMessages: Message[] = [
  {
    user: chatter,
    id: uid(),
    message: 'I finish oo I dey office',
    time: '4:37pm',
  },

  {
    user,
    id: uid(),
    message: 'Man',
    time: '4:40pm',
  },
  {
    user: chatter,
    id: uid(),
    message: 'In front of my Office now ❤️',
    time: '4:37pm',
    image:
      'https://images.pexels.com/photos/15450040/pexels-photo-15450040/free-photo-of-the-green-lady-aurora-playing-with-a-star.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    user,
    id: uid(),
    message: '❤️❤️❤️❤️wow',
    time: '4:40pm',
  },
  {
    user: user,
    id: uid(),
    message: 'Nature is Indeed Beautiful',
    image:
      'https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    time: '4:37pm',
  },
  {
    user,
    id: uid(),
    message: 'Me too I almost finish so give me some few mintues',
    time: '4:40pm',
  },
  {
    user: chatter,
    id: uid(),
    message: 'Tonight you for make I chop something oo I dey die lol',
    time: '4:48pm',
  },
];

export const todayMessages: Message[] = [
  {
    user,
    id: uid(),
    message: 'Lmao make I think',
    time: '4:50pm',
  },

  {
    user: chatter,
    id: uid(),
    message: 'I dey gate',
    time: '4:50pm',
  },
  {
    user: chatter,
    id: uid(),
    message:
      'You for look sharp make we go see am before the day go end else la wu',
    time: '5:08pm',
  },
  {
    user,
    id: uid(),
    message: 'He sef he dey slow we pass. He for open ein mind for we',
    time: '5:10pm',
  },
  {
    user: chatter,
    id: uid(),
    message: 'You understand!',
    time: '5:12pm',
  },
  {
    user,
    id: uid(),
    message:
      'I actually tell am. That be what I tell am but be like you too you for try talk to am then make we see',
    time: '5:15pm',
  },
];
