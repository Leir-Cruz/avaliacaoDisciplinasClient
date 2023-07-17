import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { api } from '../../services/api';
import { ISubject } from '../../services/interfaces';

export const SubjectsTable = () => {
  const [subjects, setSubjects] = useState<ISubject[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    api
      .get('/api/subjects')
      .then((response) => {
        setSubjects(response.data);
      })
      .catch((e) => {
        setSubjects([]);
        console.log(e);
        alert('erro ao carregar departamentos!');
      });
  }, []);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">Nome</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {subjects.map((subject) => (
            <TableRow
              key={subject.name}
              sx={{
                '&:last-child td, &:last-child th': { border: 0 },
                '&:hover': { cursor: 'pointer' },
              }}
            >
              <TableCell component="th" scope="subject">
                {subject.id}
              </TableCell>
              <TableCell align="right">{subject.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
