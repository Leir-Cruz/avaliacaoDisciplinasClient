import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { Box, Button, Dialog, styled, Typography, Zoom } from '@mui/material';

import { useGlobalContext } from '../../contexts/useContext';
import { api } from '../../services/api';

const CardDialog = styled(Dialog)(() => ({
  width: '100vw',
  height: '100vh',
  background: 'transparent',

  '& .modal': {
    display: 'flex',
    maxWidth: '600px',
    minWidth: '600px',
    width: '100%',
    height: '60vh',
    flexDirection: 'column',
    alignItems: 'flex-start',
    flexShrink: 0,
    zIndex: 2,
    background: '#F0EDEE',

    '& .header': {
      width: 'calc(100% -20px)',
      padding: '10px',
      display: 'flex',
      alignItems: 'flex-end',
    },

    '& .contentModal': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      padding: '20px',
      gap: '15px',
      width: 'calc(100% - 40px)',

      '& .title': {
        color: '#39393A',
        fontSize: '20px',
        fontFamily: 'Archivo',
        fontStyle: 'normal',
        fontWeight: 600,
        lineHeight: 'normal',
      },
    },
  },
}));

interface ICommentModal {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenPopUp: React.Dispatch<React.SetStateAction<boolean>>;
  setTypePopUp: React.Dispatch<React.SetStateAction<string>>;
  id: string | undefined;
}

export const CommentModal = ({
  open,
  setOpen,
  id,
  setOpenPopUp,
  setTypePopUp,
}: ICommentModal) => {
  const context = useGlobalContext();

  const handleComplaint = () => {
    api
      .post(`api/complaint/create`, {
        comment_id: id,
        user_id: context?.loggedUser?.id,
        status: 'pending',
      })
      .then(() => {
        setTypePopUp('success');
      })
      .catch((e) => {
        setTypePopUp('failed');
        console.log(e);
      })
      .finally(() => setOpenPopUp(true));
  };

  return (
    <CardDialog open={open}>
      <Zoom in={!!open} unmountOnExit mountOnEnter>
        <Box className="modal">
          <Box className="header">
            <CloseOutlinedIcon
              width="16.25px"
              height="16.25px"
              htmlColor="#868E96"
              onClick={() => {
                setOpen(false);
              }}
              sx={{
                '&:hover': {
                  cursor: 'pointer',
                },
              }}
            />
          </Box>
          <Box className="contentModal">
            <Typography className="title">Comentário id = {id}</Typography>
            <Button
              sx={{
                backgroundColor: '#FF715B',
              }}
              onClick={handleComplaint}
            >
              <Typography color="#FBFBFB">Denunciar Comentário</Typography>
            </Button>
          </Box>
        </Box>
      </Zoom>
    </CardDialog>
  );
};
