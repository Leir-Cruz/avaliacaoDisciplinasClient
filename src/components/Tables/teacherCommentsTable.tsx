import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { api } from '../../services/api';
import { IComment } from '../../services/interfaces';

export const TeacherCommentsTable = () => {
  const [comments, setComments] = useState<IComment[]>([]);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    api
      .get(`/api/teacher/${id}/comments`)
      .then((response) => {
        setComments(response.data);
      })
      .catch((e) => {
        setComments([]);
        console.log(e);
        alert('erro ao carregar comentários prof!');
        navigate('/');
      });
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">Texto</TableCell>
            <TableCell align="right">nota</TableCell>
            <TableCell align="right">user_id</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {comments.map((comment) => (
            <TableRow
              key={comment.id}
              sx={{
                '&:last-child td, &:last-child th': { border: 0 },
                '&:hover': { cursor: 'pointer' },
              }}
            >
              <TableCell component="th" scope="comment">
                {comment.id}
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {comment.content}
              </TableCell>
              <TableCell align="right">{comment.grade}</TableCell>
              <TableCell align="right">{comment.user_id}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
