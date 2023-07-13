import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import { ITeacher } from '../../services/interfaces';

function createData({ id, name, code, departamentId }: ITeacher) {
  return { id, name, code, departamentId };
}

const rows = [
  createData({
    id: '321321312',
    name: 'teacher@teacher',
    code: '3213333',
    departamentId: '312321',
  }),
];

export const TeacherTable = () => {
  const navigate = useNavigate();
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nomes</TableCell>
            <TableCell align="right">departamento</TableCell>
            <TableCell align="right">código&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              onClick={() => navigate(`/teacher/1`)}
              sx={{
                '&:last-child td, &:last-child th': { border: 0 },
                '&:hover': { cursor: 'pointer' },
              }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.departamentId}</TableCell>
              <TableCell align="right">{row.code}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
