import { Box, Button, styled, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import classImg from '../assets/class.png';
import { PageContainer } from '../components/Containers/PageContainer';
import { Input } from '../components/Input/Input';
import { PopUp } from '../components/PopUp/popup';
import { useGlobalContext } from '../contexts/useContext';
import { api } from '../services/api';
import { IClass } from '../services/interfaces';

const Container = styled(Box)(() => ({
  display: 'flex',
  padding: '0px 20px',
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

  '& .info': {
    display: 'flex',
    padding: '0 20px',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
    width: '50%',
    gap: '16px',
    flex: '1 0 0',
    alignSelf: 'stretch',
    backgroundColor: '#1A1C20',

    '& .infoContainer': {
      display: 'flex',
      padding: '16px',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '12px',
      alignSelf: 'stretch',
      borderTop: '1px solid #F0EDEE',
    },

    '& .MuiTypography-root': {
      color: '#F0EDEE',
    },

    '& .addComment': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      width: '50%',
      gap: '8px',

      '& .label': {
        color: '#1A1C20',
        fontSize: '18px',
        fontFamily: 'Archivo',
        fontStyle: 'normal',
        fontWeight: 600,
        lineHeight: 'normal',
      },

      '& .description': {
        color: '#868E96',
        fontSize: '12px',
        fontFamily: 'Archivo',
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: 'normal',
      },
    },
  },
}));

export const ClassPage = () => {
  const [content, setContent] = useState<string>('');
  const [grade, setGrade] = useState<string>('');
  const [classInfo, setClassInfo] = useState<IClass | null>(null);
  const [open, setOpen] = useState<boolean>(false);
  const [created, setCreated] = useState<string>('');
  const context = useGlobalContext();
  const { id } = useParams();

  const handleComment = () => {
    api
      .post(`api/comment/create`, {
        content: content,
        grade: grade,
        user_id: context?.loggedUser?.id,
        teacher_id: null,
        class_id: id,
      })
      .then(() => {
        setCreated('success');
      })
      .catch((e) => {
        setCreated('failed');
        console.log(e);
      })
      .finally(() => setOpen(true));
  };

  useEffect(() => {
    api
      .get(`api/class/${id}`)
      .then((response) => {
        setClassInfo(response.data);
      })
      .catch((e) => {
        console.log(e);
        setClassInfo(null);
        alert('falha ao carregar informações do professor');
      });
  }, []);
  return (
    <PageContainer>
      <Container>
        <PopUp open={open} setOpen={setOpen} type={created} />
        <img src={classImg} alt="classImg" />
        <Box className="info">
          {classInfo?.name && <Typography>Nome da turma: {classInfo?.name}</Typography>}
          {classInfo?.teacher_id && (
            <Typography>Id professor: {classInfo?.teacher_id}</Typography>
          )}
          {classInfo?.subject_id && (
            <Typography>Id da matéria: {classInfo?.subject_id}</Typography>
          )}
          <Box className="addComment">
            <Typography className="label">Adicionar Avaliação</Typography>
            <Typography className="description">
              Deixe aqui seu comentário sobre o professor! Lembre de não postar nada
              maldoso, nossos admin estão de olho!
            </Typography>
            <Input
              placeholder="Comentário"
              onChange={(e) => setContent(e.target.value)}
              width="100%"
              height="25px"
              fontSize="14px"
              value={content}
            />{' '}
            <Input
              placeholder="Nota"
              onChange={(e) => setGrade(e.target.value)}
              width="50%"
              height="25px"
              fontSize="14px"
              value={grade}
            />
          </Box>
          <Button
            sx={{
              backgroundColor: '#C589E8',
            }}
            onClick={handleComment}
          >
            <Typography color="#FBFBFB">Enviar Avaliação</Typography>
          </Button>
          {context?.loggedUser && (
            <Button
              sx={{
                backgroundColor: '#FF715B',
              }}
            >
              <Typography color="#FBFBFB">Ver avaliações dessa turma</Typography>
            </Button>
          )}
        </Box>
      </Container>
    </PageContainer>
  );
};
