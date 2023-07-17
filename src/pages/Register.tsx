import { Box, Button, styled, Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { PageContainer } from '../components/Containers/PageContainer';
import { Input } from '../components/Input/Input';
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
  borderRadius: '12px',
  backgroundColor: '#C589E8',

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

export const Register = () => {
  const [email, setEmail] = useState<string>('');
  const [code, setCode] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [graduation, setGraduation] = useState<string>('');

  const navigate = useNavigate();
  const handleRegister = () => {
    api
      .post('api/user/create', {
        email: email,
        password: password,
        code: code,
        graduation: graduation,
        isadmin: false,
      })
      .then(() => {
        alert('usuário criado!');
        navigate('/login');
      })
      .catch((e) => {
        alert('erro ao registrar usuário');
        console.log(e);
      });
  };
  return (
    <PageContainer>
      <Container>
        <Typography className="title">Fazer Cadastro</Typography>
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
          <Typography className="label">Matrícula</Typography>
          <Input
            placeholder="Matrícula"
            onChange={(e) => setCode(e.target.value)}
            width="100%"
            height="25px"
            fontSize="12px"
          />
        </Box>
        <Box className="inputContainer">
          <Typography className="label">Curso</Typography>
          <Input
            placeholder="Curso"
            onChange={(e) => setGraduation(e.target.value)}
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
          onClick={handleRegister}
        >
          Cadastrar
        </Button>
      </Container>
    </PageContainer>
  );
};
