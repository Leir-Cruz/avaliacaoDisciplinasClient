import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { IClass } from '../../services/interfaces';

function createData({ id, name, teacherId, subjectId, appointment }: IClass) {
  return { id, name, teacherId, subjectId, appointment };
}

const rows = [
  createData({
    id: '321321312',
    name: 'classes',
    teacherId: '123213',
    subjectId: '312321',
    appointment: '35T23',
  }),
];

export const ClassesTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nomes</TableCell>
            <TableCell align="right">Professor</TableCell>
            <TableCell align="right">Matéria&nbsp;</TableCell>
            <TableCell align="right">Horário&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.teacherId}</TableCell>
              <TableCell align="right">{row.subjectId}</TableCell>
              <TableCell align="right">{row.appointment}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
