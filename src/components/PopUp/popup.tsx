import CloseIcon from '@mui/icons-material/CancelRounded';
import RoundedCheckedIcon from '@mui/icons-material/CheckCircleRounded';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { Box, Portal, Slide, Typography } from '@mui/material';

interface IPopUp {
  type: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const PopUp = ({ type, open, setOpen }: IPopUp) => {
  if (open)
    return (
      <Portal>
        <Slide direction="up" timeout={250} in={!!open} unmountOnExit mountOnEnter>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              padding: '12px',
              gap: '16px',
              position: 'fixed',
              height: '44px',
              left: '40px',
              bottom: '40px',
              background: '#111315',
              border: '1px solid #111315',
              boxShadow: '0px 4px 18px rgba(0, 71, 255, 0.04)',
              borderRadius: '8px',
              zIndex: 10000,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                padding: '0px',
                gap: '8px',
                height: '20px',
              }}
            >
              {type === 'success' ? (
                <RoundedCheckedIcon
                  width="16.25px"
                  height="16.25px"
                  htmlColor="#40C057"
                />
              ) : (
                <CloseIcon width="16.25px" height="16.25px" htmlColor="#F03E3E" />
              )}
              <Typography
                sx={{
                  fontFamily: 'Inter',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  fontSize: '14px',
                  lineHeight: '17px',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minWidth: 'fit-content',
                  gap: '8px',
                  '&:hover': {
                    cursor: 'pointer',
                  },

                  '& span': {
                    fontFamily: 'Inter',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    fontSize: '14px',
                    lineHeight: '17px',
                    color: '#4C6EF5',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minWidth: 'fit-content',
                    gap: '5px',
                  },
                }}
              >
                {type === 'success'
                  ? 'Sucesso ao realizar operação!'
                  : 'Falha ao realizar operação!'}
              </Typography>
            </Box>
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
        </Slide>
      </Portal>
    );
  return <></>;
};
