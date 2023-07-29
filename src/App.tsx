import { MantineProvider } from '@mantine/core';
import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { theme } from './theme';
import { ProfileContextProvider } from './context/ProfileContext';
import { SigninContextProvider } from './context/SignInContext';
import { ChatContextProvider } from './context/ChatContext';

const SigninPage = lazy(() => import('./pages/signin'));
const ChattereeIdPage = lazy(() => import('./pages/new-id'));
const ProfilePage = lazy(() => import('./pages/profile'));
const ChatPage = lazy(() => import('./pages/chat/'));

function App() {
  return (
    <BrowserRouter>
      <ProfileContextProvider>
        <SigninContextProvider>
          <ChatContextProvider>
            <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
              <Suspense fallback={<>Loading...</>}>
                <Routes>
                  <Route index element={<SigninPage />}></Route>
                  <Route path="new-id" element={<ChattereeIdPage />}></Route>
                  <Route path="profile" element={<ProfilePage />}></Route>
                  <Route path="chat" element={<ChatPage />}></Route>
                  <Route path="signin" element={<SigninPage />}></Route>
                </Routes>
              </Suspense>
            </MantineProvider>
          </ChatContextProvider>
        </SigninContextProvider>
      </ProfileContextProvider>
    </BrowserRouter>
  );
}

export default App;
