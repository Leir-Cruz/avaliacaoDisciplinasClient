import { Box, Button, styled, Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { PageContainer } from '../components/Containers/PageContainer';
import { Input } from '../components/Input/Input';
import { useGlobalContext } from '../contexts/useContext';
import { api } from '../services/api';

const Container = styled(Box)(() => ({
  display: 'flex',
  padding: '16px 20px',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  margin: '0 auto',
  width: '50%',
  gap: '16px',
  flex: '1 0 0',
  alignSelf: 'stretch',
  border: '5px solid #F0EDEE',
  backgroundColor: '#C589E8',
  borderRadius: '12px',

  '& .title': {
    color: '#1A1C20',
    fontSize: '20px',
    fontFamily: 'Archivo',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: 'normal',
  },
  '& .inputContainer': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '50%',
    gap: '8px',

    '& .label': {
      color: '#1A1C20',
      fontSize: '14px',
      fontFamily: 'Archivo',
      fontStyle: 'normal',
      fontWeight: 600,
      lineHeight: 'normal',
    },
  },
}));

export const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const context = useGlobalContext();
  const navigate = useNavigate();

  const handleClick = () => {
    api
      .post('api/login', { email: email, password: password })
      .then((response) => {
        context?.setLoggedUser(response.data);
        alert('logado com sucesso!');
        navigate('/');
      })
      .catch((e) => {
        alert('erro ao fazer login');
        console.log(e);
      });
  };

  return (
    <PageContainer>
      <Container>
        <Typography className="title">Login</Typography>
        <Box className="inputContainer">
          <Typography className="label">Email</Typography>
          <Input
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            width="100%"
            height="25px"
            fontSize="12px"
          />
        </Box>

        <Box className="inputContainer">
          <Typography className="label">Senha</Typography>
          <Input
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
            width="100%"
            height="25px"
            fontSize="12px"
          />
        </Box>
        <Button
          sx={{
            backgroundColor: '#111315',
            color: '#FFF',
          }}
          onClick={handleClick}
        >
          Entrar
        </Button>
      </Container>
    </PageContainer>
  );
};
