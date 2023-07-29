export type User = {
  id: string;
  name: string;
  imageUrl: string;
};

export interface Chatter extends User {
  unreadMessages: string[];
  readMessages: string[];
  online: boolean;
  favorite: boolean;
  time: string;
}

export type Message = {
  id: string;
  user: User;
  message: string;
  time: string;
  image?: string;
};

export interface Profile extends Omit<User, 'id'> {
  email: string;
  phone: string;
  chattereeId: string;
}

export interface IProfileContext {
  profileDetails: Profile;
  setProperty: (key: keyof Profile, value: string) => void;
}

export type Status = '' | 'loading' | 'error' | 'success';
