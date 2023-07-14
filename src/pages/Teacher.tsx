import { Box, Button, styled, Typography } from '@mui/material';
import { useState } from 'react';

import teacher from '../assets/teacher.png';
import { PageContainer } from '../components/Containers/PageContainer';
import { Input } from '../components/Input/Input';
import { ITeacher } from '../services/interfaces';

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

    '& .infoContainer': {
      display: 'flex',
      padding: '16px',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '12px',
      alignSelf: 'stretch',
      borderTop: '1px solid #F0EDEE',
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
  const [comment, setComment] = useState<string>('');
  const [grade, setGrade] = useState<string>('');
  const [teacherInfo, setTeacherInfo] = useState<ITeacher | null>(null);

  return (
    <PageContainer>
      <Container>
        <img src={teacher} alt="teacher" />
        <Box className="info">
          {teacherInfo?.name && <Typography>{teacherInfo?.name}</Typography>}
          {teacherInfo?.code && <Typography>{teacherInfo?.code}</Typography>}
          {teacherInfo?.departamentId && (
            <Typography>{teacherInfo?.departamentId}</Typography>
          )}
          <Box className="addComment">
            <Typography className="label">Adicionar Avaliação</Typography>
            <Typography className="description">
              Deixe aqui seu comentário sobre o professor! Lembre de não postar nada
              maldoso, nossos admin estão de olho!
            </Typography>
            <Input
              placeholder="Comentário"
              onChange={(e) => setComment(e.target.value)}
              width="100%"
              height="25px"
              fontSize="14px"
              value={comment}
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
            >
              <Typography color="#FBFBFB">Enviar Avaliação</Typography>
            </Button>
          </Box>
        </Box>
      </Container>
    </PageContainer>
  );
};
