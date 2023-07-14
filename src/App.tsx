import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { GlobalContext } from './contexts/useContext';
import MainRoutes from './Routes';
import { IUser } from './services/interfaces';

function App() {
  const [loggedUser, setLoggedUser] = useState<IUser | null>(null);

  return (
    <GlobalContext.Provider value={{ loggedUser, setLoggedUser }}>
      <BrowserRouter>
        <MainRoutes />
      </BrowserRouter>
    </GlobalContext.Provider>
  );
}

export default App;
