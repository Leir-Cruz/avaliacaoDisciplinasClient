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

export const RegisterSubject = () => {
  const [name, setName] = useState<string>('');

  const navigate = useNavigate();
  const handleRegister = () => {
    api
      .post('api/subject/create', {
        name: name,
      })
      .then(() => {
        alert('matéria criada!');
        navigate('/subject');
      })
      .catch((e) => {
        alert('erro ao registrar matéria');
        console.log(e);
      });
  };
  return (
    <PageContainer>
      <Container>
        <Typography className="title">Criar matéria</Typography>
        <Box className="inputContainer">
          <Typography className="label">name</Typography>
          <Input
            placeholder="name"
            onChange={(e) => setName(e.target.value)}
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
