import { Screen, SignInContext } from '@/context/SignInContext';
import { ActionIcon, Text } from '@mantine/core';
import { useContext } from 'react';
import { IoIosArrowRoundBack } from 'react-icons/io';

interface Props {
  screen: Screen;
}
export const BackButton = ({ screen }: Props) => {
  const { setSigninState } = useContext(SignInContext);

  const handleGoBack = () => {
    setSigninState({
      screen,
      action: 'prev',
    });
  };
  return (
    <ActionIcon
      pos="fixed"
      top={{ base: 50, md: 140 }}
      left={{ base: 50, sm: 100 }}
      variant="outline"
      color="gray.1"
      radius="xl"
      size="xl"
      bg="white"
      sx={(theme) => ({ boxShadow: theme.shadows.sm })}
      onClick={handleGoBack}
    >
      <Text color="gray.6" pt={8}>
        <IoIosArrowRoundBack size="1.2rem" />{' '}
      </Text>
    </ActionIcon>
  );
};
