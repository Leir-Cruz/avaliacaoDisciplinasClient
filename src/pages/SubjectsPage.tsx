import { Box, styled, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { PageButton } from '../components/Buttons/PageButton';
import { PageContainer } from '../components/Containers/PageContainer';
import { SubjectsTable } from '../components/Tables/subjectsTable';
import { useGlobalContext } from '../contexts/useContext';

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

export const SubjectsPage = () => {
  const context = useGlobalContext();
  const navigate = useNavigate();
  return (
    <PageContainer>
      <Container>
        <Typography className="title">Lista de Matérias</Typography>
        <SubjectsTable />
        {context?.loggedUser?.isadmin && (
          <PageButton
            text="Cadastrar Matéria"
            onClick={() => navigate('/registerSubject')}
          />
        )}
      </Container>
    </PageContainer>
  );
};
