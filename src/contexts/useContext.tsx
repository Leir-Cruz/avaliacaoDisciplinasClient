import { createContext, SetStateAction, useContext } from 'react';

import { IUser } from '../services/interfaces';

export type GlobalContent = {
  loggedUser: IUser | null;
  setLoggedUser: React.Dispatch<SetStateAction<IUser | null>>;
};

export const GlobalContext = createContext<GlobalContent | null>(null);

export const useGlobalContext = () => useContext(GlobalContext);
