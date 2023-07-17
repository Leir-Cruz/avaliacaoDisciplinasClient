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
import { IClass } from '../../services/interfaces';

export const ClassesTable = () => {
  const navigate = useNavigate();
  const [classes, setClasses] = useState<IClass[]>([]);
  useEffect(() => {
    api
      .get('/api/classes')
      .then((response) => {
        setClasses(response.data);
      })
      .catch((e) => {
        setClasses([]);
        console.log(e);
        alert('erro ao carregar turmas!');
      });
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nomes</TableCell>
            <TableCell align="right">Professor</TableCell>
            <TableCell align="right">Matéria&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {classes.map((classe) => (
            <TableRow
              key={classe.name}
              onClick={() => navigate(`/class/${classe.id}`)}
              sx={{
                '&:last-child td, &:last-child th': { border: 0 },
                '&:hover': { cursor: 'pointer' },
              }}
            >
              <TableCell component="th" scope="class">
                {classe.name}
              </TableCell>
              <TableCell align="right">{classe.teacher_id}</TableCell>
              <TableCell align="right">{classe.subject_id}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
