import { Box, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { PageButton } from '../components/Buttons/PageButton';
import { ImageContainer } from '../components/Containers/ImageContainer';
import { PageContainer } from '../components/Containers/PageContainer';
import { useGlobalContext } from '../contexts/useContext';

const Container = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  padding: '16px',
  width: '50%',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: '15px',
  alignSelf: 'stretch',
  border: '5px solid #F0EDEE',
  backgroundColor: '#39393A',
  borderRadius: '12px',
  margin: '0 auto',
}));

export const HomePage = () => {
  const navigate = useNavigate();
  const context = useGlobalContext();

  return (
    <PageContainer color="#1A1C20">
      <Container>
        <ImageContainer
          photoUrl={
            'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Webysther_20160322_-_Logo_UnB_%28sem_texto%29.svg/1200px-Webysther_20160322_-_Logo_UnB_%28sem_texto%29.svg.png'
          }
          width="300px"
          height="200px"
        />

        {context?.loggedUser ? (
          <PageButton
            text="Minha página"
            height="50px"
            onClick={() => navigate(`/student/${context.loggedUser?.id}`)}
          />
        ) : (
          <>
            <PageButton text="Login" height="50px" onClick={() => navigate(`login`)} />
            <PageButton
              text="Cadastro"
              height="50px"
              onClick={() => navigate(`register`)}
            />
          </>
        )}
      </Container>
    </PageContainer>
  );
};
