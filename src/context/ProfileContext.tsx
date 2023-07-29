import { IProfileContext, Profile } from '@/model';
import { useLocalStorage } from '@mantine/hooks';
import { ReactNode, createContext, useEffect } from 'react';

export const ProfileContext = createContext<IProfileContext>(null as any);

type ProviderProps = {
  children: ReactNode;
};

const defaultValue: Profile = {
  email: '',
  phone: '',
  chattereeId: '',
  name: '',
  imageUrl: '',
};

export const ProfileContextProvider = ({ children }: ProviderProps) => {
  const [profileDetails, setProfileDetails] = useLocalStorage({
    key: 'chatteree-current-user-info',
    defaultValue,
  });

  const setProperty = (key: keyof Profile, value: string) => {
    setProfileDetails({
      ...profileDetails,
      [key]: value,
    });
  };

  useEffect(() => {
    setProfileDetails(defaultValue);
  }, [setProfileDetails]);

  return (
    <ProfileContext.Provider value={{ profileDetails, setProperty }}>
      {children}
    </ProfileContext.Provider>
  );
};
