import { Paper } from '@mui/material';

interface IImageContainer {
  photoUrl: string;
  width?: string;
  height?: string;
}

export const ImageContainer = ({ photoUrl, width, height }: IImageContainer) => {
  return (
    <Paper
      sx={{
        width: width ? width : '332px',
        height: height ? height : '415px',
        background: 'transparent',
      }}
      elevation={2}
    >
      <img src={photoUrl} alt="" style={{ width: '100%', height: '100%' }} />
    </Paper>
  );
};
