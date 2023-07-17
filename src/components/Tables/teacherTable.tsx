import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { api } from '../../services/api';
import { ITeacher } from '../../services/interfaces';

export const TeacherTable = () => {
  const [teachers, setTeachers] = useState<ITeacher[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    api
      .get('/api/teachers')
      .then((response) => {
        setTeachers(response.data);
      })
      .catch((e) => {
        setTeachers([]);
        console.log(e);
        alert('erro ao carregar professores!');
      });
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">Nome</TableCell>
            <TableCell align="right">Departamento_id</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {teachers.map((teacher) => (
            <TableRow
              key={teacher.id}
              onClick={() => navigate(`/teacher/${teacher.id}`)}
              sx={{
                '&:last-child td, &:last-child th': { border: 0 },
                '&:hover': { cursor: 'pointer' },
              }}
            >
              <TableCell component="th" scope="teacher">
                {teacher.id}
              </TableCell>
              <TableCell align="right">{teacher.name}</TableCell>
              <TableCell align="right">{teacher.departament_id}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
