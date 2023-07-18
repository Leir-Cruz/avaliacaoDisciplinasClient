import { Box, styled, Typography } from '@mui/material';
import { useState } from 'react';

import { PageContainer } from '../components/Containers/PageContainer';
import { ComplainModal } from '../components/Modal/complaintModal';
import { PopUp } from '../components/PopUp/popup';
import { ComplaintsTable } from '../components/Tables/ComplaintsTable';

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

export const ComplaintsPage = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [openPopUp, setOpenPopUp] = useState<boolean>(false);
  const [typePopUp, setTypePopUp] = useState<string>('');
  const [id, setId] = useState<string>('');

  return (
    <PageContainer>
      <Container>
        <ComplainModal
          open={open}
          setOpen={setOpen}
          setOpenPopUp={setOpenPopUp}
          setTypePopUp={setTypePopUp}
          id={id}
        />
        <PopUp open={openPopUp} setOpen={setOpenPopUp} type={typePopUp} />
        <Typography className="title">Lista de Denúncias</Typography>
        <ComplaintsTable onClickRow={setOpen} setId={setId} />
      </Container>
    </PageContainer>
  );
};
