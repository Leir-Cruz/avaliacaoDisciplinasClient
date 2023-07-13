import { Box } from '@mui/material';

interface IInputContainer {
  children: JSX.Element[];
  width?: string;
}

export const InputContainer = ({ children, width }: IInputContainer) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: '10px',
        width: width ? width : '100%',
      }}
    >
      {children}
    </Box>
  );
};
