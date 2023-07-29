import { Box, FileButton, Text, UnstyledButton } from '@mantine/core';
import { useContext, useRef } from 'react';
import { CiImageOn } from 'react-icons/ci';
import { useStyles } from './useStyles';
import { ProfileContext } from '@/context/ProfileContext';

export const PhotoUploader = () => {
  const {
    setProperty,
    profileDetails: { imageUrl },
  } = useContext(ProfileContext);
  const { classes } = useStyles();
  const profileImageRef = useRef<() => void>(null);

  const handleImageChange = (file: File) => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProperty('imageUrl', reader.result as string);
        profileImageRef.current?.();
      };
      reader.readAsDataURL(file);
    } else {
      setProperty('imageUrl', '');
    }
  };

  return (
    <>
      <Box className={classes.profileContainerWrapper}>
        <Box
          className={classes.profileContainer}
          bg={`center / cover no-repeat url(${
            imageUrl ? imageUrl : 'assets/profile-placeholder.svg'
          })`}
        />
        <FileButton
          resetRef={profileImageRef}
          onChange={handleImageChange}
          accept="image/png,image/jpeg"
        >
          {(props) => (
            <UnstyledButton className={classes.uploadBtn} {...props}>
              <Text className="icon" size="md" mr="xs">
                <CiImageOn />{' '}
              </Text>{' '}
              Upload photo
            </UnstyledButton>
          )}
        </FileButton>
      </Box>
    </>
  );
};
