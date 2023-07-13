import { Box, Typography } from '@mui/material';

interface IPageButton {
  color?: string;
  text: string;
  width?: string;
  height?: string;
  onClick?: () => void;
  fontSize?: string;
}

export const PageButton = ({
  color,
  text,
  onClick,
  width,
  height,
  fontSize,
}: IPageButton) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        width: width ? width : 'fit-content',
        height: height ? height : '100px',
        background: color ? color : '#4263EB',
        borderRadius: '10px',
        padding: '8px 12px',
        position: 'relative',
        '&:hover': {
          cursor: 'pointer',
          opacity: 0.8,
        },
      }}
      onClick={onClick}
    >
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: fontSize ? fontSize : '48px',
          textTransform: 'uppercase',
          color: '#FFFFFF',
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};
