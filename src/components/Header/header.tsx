import { Box, styled, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Container = styled(Box)(() => ({
  display: 'flex',
  padding: '16px',
  width: 'calc(100% -32px)',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: '8px',
  alignSelf: 'stretch',
  borderBottom: '1px solid #E9ECEF',
  '& .title': {
    color: '#000',
    fontSize: '20px',
    fontFamily: 'Archivo',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: 'normal',

    '&:hover': {
      cursor: 'pointer',
    },
  },

  '& .subTitle': {
    color: '#868E96',
    fontSize: '14px',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: 'normal',
  },
}));

export const Header = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Typography className="title" onClick={() => navigate(`/`)}>
        UnbAvaliations
      </Typography>
      <Typography className="subTitle">
        Comente aqui suas impressões sobre os professores e turmas!
      </Typography>
    </Container>
  );
};
