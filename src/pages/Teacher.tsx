import { Box, Button, styled, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import teacher from '../assets/teacher.png';
import { PageContainer } from '../components/Containers/PageContainer';
import { Input } from '../components/Input/Input';
import { useGlobalContext } from '../contexts/useContext';
import { api } from '../services/api';
import { ITeacher } from '../services/interfaces';

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
    padding: '16px 20px',
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

export const TeacherPage = () => {
  const [content, setContent] = useState<string>('');
  const [grade, setGrade] = useState<string>('');
  const [teacherInfo, setTeacherInfo] = useState<ITeacher | null>(null);
  const context = useGlobalContext();
  const { id } = useParams();

  const handleComment = () => {
    api
      .post(`api/comment/create`, {
        content: content,
        grade: grade,
        user_id: context?.loggedUser?.id,
        teacher_id: id,
        class_id: null,
      })
      .then((response) => {
        context?.setLoggedUser(response.data);
        alert('comentário feito com sucesso!');
      })
      .catch((e) => {
        alert('erro ao comentar infos');
        console.log(e);
      });
  };

  useEffect(() => {
    api
      .get(`api/teacher/${id}`)
      .then((response) => {
        setTeacherInfo(response.data);
      })
      .catch((e) => {
        console.log(e);
        setTeacherInfo(null);
        alert('falha ao carregar informações do professor');
      });
  }, []);

  return (
    <PageContainer>
      <Container>
        <img src={teacher} alt="teacher" />
        <Box className="info">
          {teacherInfo?.name && (
            <Typography>Nome do Professor: {teacherInfo?.name}</Typography>
          )}
          {teacherInfo?.departament_id && (
            <Typography>Id do departamento: {teacherInfo?.departament_id}</Typography>
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
                <Typography color="#FBFBFB">Ver avaliações desse professor</Typography>
              </Button>
            )}
          </Box>
        </Box>
      </Container>
    </PageContainer>
  );
};
