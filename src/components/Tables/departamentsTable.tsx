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
import { IDepartment } from '../../services/interfaces';

export const DepartamentsTable = () => {
  const [departaments, setDepartaments] = useState<IDepartment[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    api
      .get('/api/departaments')
      .then((response) => {
        setDepartaments(response.data);
      })
      .catch((e) => {
        setDepartaments([]);
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
          {departaments.map((departament) => (
            <TableRow
              key={departament.name}
              sx={{
                '&:last-child td, &:last-child th': { border: 0 },
                '&:hover': { cursor: 'pointer' },
              }}
            >
              <TableCell component="th" scope="departament">
                {departament.name}
              </TableCell>
              <TableCell align="right">{departament.id}</TableCell>
              <TableCell align="right">{departament.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
