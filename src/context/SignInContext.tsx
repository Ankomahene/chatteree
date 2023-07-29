import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from 'react';

type PageAction = 'next' | 'prev' | '';
export type Screen = 'signin' | 'verify';

interface State {
  screen: Screen;
  action: PageAction;
}

interface ISigninContext {
  signinState: State;
  setSigninState: Dispatch<SetStateAction<State>>;
}

export const SignInContext = createContext<ISigninContext>(null as any);

const initialState: State = {
  screen: 'signin',
  action: '',
};

type ProviderProps = {
  children: ReactNode;
};

export const SigninContextProvider = ({ children }: ProviderProps) => {
  const [signinState, setSigninState] = useState(initialState);

  return (
    <SignInContext.Provider value={{ signinState, setSigninState }}>
      {children}
    </SignInContext.Provider>
  );
};
