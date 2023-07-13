import { Box, Button, styled, Typography } from '@mui/material';
import { useState } from 'react';

import student from '../assets/student.png';
import { PageContainer } from '../components/Containers/PageContainer';
import { Input } from '../components/Input/Input';

const Container = styled(Box)(() => ({
  display: 'flex',
  padding: '16px 20px',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
  margin: '0',
  width: '100%',
  gap: '16px',
  flex: '1 0 0',
  alignSelf: 'stretch',
  backgroundColor: '#fff',

  '& img': {
    width: '300px',
    height: '300px',
  },

  '& .editInfo': {
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

    '& .inputContainer': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      width: '50%',
      gap: '8px',

      '& .label': {
        color: '#000',
        fontSize: '14px',
        fontFamily: 'Archivo',
        fontStyle: 'normal',
        fontWeight: 600,
        lineHeight: 'normal',
      },
    },
    '& .buttonContainer': {
      display: 'flex',
      padding: '16px',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '12px',
      alignSelf: 'stretch',
      borderBottom: '1px solid #E9ECEF',
    },
  },

  '& .navigation': {
    display: 'flex',
    flexDirection: 'column',
    padding: '16px',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '12px',
    alignSelf: 'center',
  },
}));

export const UserPage = () => {
  const [email, setEmail] = useState<string>('');
  const [code, setCode] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [graduation, setGraduation] = useState<string>('');
  return (
    <PageContainer>
      <Container>
        <img src={student} alt="student"></img>
        <Box className="editInfo">
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
          <Box className="buttonContainer">
            <Button
              sx={{
                backgroundColor: '#FBFBFB',
              }}
            >
              <Typography color={'#111315'}>Limpar</Typography>
            </Button>
            <Button
              sx={{
                backgroundColor: '#111315',
              }}
            >
              <Typography color="#FBFBFB">Salvar</Typography>
            </Button>
          </Box>
          <Box className="navigation">
            <Button
              sx={{
                backgroundColor: '#1C7ED6',
              }}
            >
              <Typography color={'#FBFBFB'}>Ir para página dos professores</Typography>
            </Button>
            <Button
              sx={{
                backgroundColor: '#1C7ED6',
              }}
            >
              <Typography color="#FBFBFB">Ir para página das turmas</Typography>
            </Button>
            <Button
              sx={{
                backgroundColor: '#FF4040',
              }}
            >
              <Typography color="#FBFBFB">Apagar minha conta</Typography>
            </Button>
          </Box>
        </Box>
      </Container>
    </PageContainer>
  );
};
