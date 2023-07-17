import { Box, Button, Select, styled, Typography } from '@mui/material';
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

export const RegisterClass = () => {
  const [name, setName] = useState<string>('');
  const [teacher_id, setTeacher_id] = useState<string>('');
  const [subject_id, setSubject_id] = useState<string>('');

  const navigate = useNavigate();
  const handleRegister = () => {
    api
      .post('api/class/create', {
        name: name,
        teacher_id: teacher_id,
        subject_id: subject_id,
      })
      .then(() => {
        alert('turma criada!');
        navigate('/class');
      })
      .catch((e) => {
        alert('erro ao registrar turma');
        console.log(e);
      });
  };
  return (
    <PageContainer>
      <Container>
        <Typography className="title">Cadastrar Turma</Typography>
        <Box className="inputContainer">
          <Typography className="label">Nome</Typography>
          <Input
            placeholder="Nome"
            onChange={(e) => setName(e.target.value)}
            width="100%"
            height="25px"
            fontSize="12px"
          />
        </Box>
        <Box className="inputContainer">
          <Typography className="label">Id Professor</Typography>
          <Input
            placeholder="Id Professor"
            onChange={(e) => setTeacher_id(e.target.value)}
            width="100%"
            height="25px"
            fontSize="12px"
          />
        </Box>
        <Box className="inputContainer">
          <Typography className="label">Id Matéria</Typography>
          <Input
            placeholder="Id Matéria"
            onChange={(e) => setSubject_id(e.target.value)}
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
