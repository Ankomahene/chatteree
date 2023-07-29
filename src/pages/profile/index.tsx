import { Heading } from '@/components/Heading';
import { Logo } from '@/components/Logo';
import { ProfileContext } from '@/context/ProfileContext';
import { useGlobalStyles } from '@/hooks/useGlobalStyles';
import { Box, Button, Flex, Input, Text } from '@mantine/core';
import { useContext, useState } from 'react';
import { PhotoUploader } from './PhotoUploader';
import { useNavigate } from 'react-router-dom';
import { ChatContext } from '@/context/ChatContext';
import { getDefaultChatterDetails } from '@/helpers';

const ProfilePage = () => {
  const { profileDetails, setProperty } = useContext(ProfileContext);
  const { addChatter } = useContext(ChatContext);
  const { classes: globalClasses } = useGlobalStyles();
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleOpenChat = () => {
    if (profileDetails.name) {
      const { name, chattereeId: id, imageUrl } = profileDetails;
      addChatter(getDefaultChatterDetails(name, id, imageUrl));
      navigate('/chat');
    } else {
      setError(true);
    }
  };

  return (
    <Flex className={globalClasses.container} justify="center">
      <Flex direction="column" align="center">
        <Logo />
        <Heading text="Help them Identify you" />
        <PhotoUploader />
        <Box w={320}>
          <Input.Description py={8} className={globalClasses.inputLabel}>
            Your name
          </Input.Description>
          <Input
            type="text"
            value={profileDetails.name}
            onChange={(e) => setProperty('name', e.target.value)}
            rightSection={
              <Text color="gray.5" size="sm">
                {18 - profileDetails.name.length}
              </Text>
            }
            radius="xl"
          />
          {error && <Input.Error>Please enter your name</Input.Error>}
        </Box>

        <Flex justify="flex-end">
          <Button onClick={handleOpenChat} className={globalClasses.mainButton}>
            Let’s geauxxxx!
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ProfilePage;
