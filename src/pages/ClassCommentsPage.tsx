import { Box, styled, Typography } from '@mui/material';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { PageContainer } from '../components/Containers/PageContainer';
import { CommentModal } from '../components/Modal/modal';
import { PopUp } from '../components/PopUp/popup';
import { ClassCommentsTable } from '../components/Tables/classCommentsTable';

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
    fontSize: '16px',
    fontFamily: 'Archivo',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: 'normal',
  },
}));

export const ClassCommentsPage = () => {
  const { id } = useParams();
  const [open, setOpen] = useState<boolean>(false);
  const [openPopUp, setOpenPopUp] = useState<boolean>(false);
  const [typePopUp, setTypePopUp] = useState<string>('');

  return (
    <PageContainer>
      <Container>
        <CommentModal
          open={open}
          setOpen={setOpen}
          setOpenPopUp={setOpenPopUp}
          setTypePopUp={setTypePopUp}
          id={id}
        />
        <PopUp open={openPopUp} setOpen={setOpenPopUp} type={typePopUp} />
        <Typography className="title">Comentários da turma id = {id}</Typography>
        <ClassCommentsTable onClickRow={setOpen} />
      </Container>
    </PageContainer>
  );
};
