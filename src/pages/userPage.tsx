import { Box, Button, styled, Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import student from '../assets/student.png';
import { PageContainer } from '../components/Containers/PageContainer';
import { Input } from '../components/Input/Input';
import { useGlobalContext } from '../contexts/useContext';

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
        color: '#1A1C20',
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
      borderBottom: '1px solid #F0EDEE',
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
  const context = useGlobalContext();
  const navigate = useNavigate();
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
                backgroundColor: '#C589E8',
              }}
              onClick={() => navigate(`/teacher/`)}
            >
              <Typography color={'#FBFBFB'}>Ir para página dos professores</Typography>
            </Button>
            <Button
              sx={{
                backgroundColor: '#C589E8',
              }}
              onClick={() => navigate(`/class/`)}
            >
              <Typography color="#FBFBFB">Ir para página das turmas</Typography>
            </Button>
            <Button
              sx={{
                backgroundColor: '#FF715B',
              }}
            >
              <Typography color="#FBFBFB">Apagar minha conta</Typography>
            </Button>
            {context?.loggedUser?.isadmin && (
              <Button
                sx={{
                  backgroundColor: '#FF715B',
                }}
              >
                <Typography color="#FBFBFB">Ver todas as contas</Typography>
              </Button>
            )}
          </Box>
        </Box>
      </Container>
    </PageContainer>
  );
};
