import { Box } from '@mui/material';

import { Header } from '../Header/header';

interface IContainer {
  children: JSX.Element;
  color?: string;
}
export const PageContainer = ({ children, color }: IContainer) => {
  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: '100vh',
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        backgroundColor: color ? color : '#1A1C20',
        boxSizing: 'border-box',
        gap: '40px',
        //padding: '0 0 30px 0',
      }}
    >
      <Header />
      {children}
    </Box>
  );
};
