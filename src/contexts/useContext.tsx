import { createContext, useContext, useState } from 'react';

export interface GlobalContext {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
}

const GlobalContext = createContext<GlobalContext | null>(null);

export const useGlobalContext = () => useContext(GlobalContext);
