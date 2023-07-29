import { SignInContext } from '@/context/SignInContext';
import { useContext } from 'react';
import { Signin } from './Signin';
import { VerifyEmail } from './VerifyEmail';

const SigninPage = () => {
  const {
    signinState: { screen },
  } = useContext(SignInContext);

  return (
    <>
      {screen === 'signin' && <Signin />}
      {screen === 'verify' && <VerifyEmail />}
    </>
  );
};

export default SigninPage;
