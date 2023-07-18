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
import { IComplaint } from '../../services/interfaces';

interface IComplaintsTable {
  onClickRow: React.Dispatch<React.SetStateAction<boolean>>;
  setId: React.Dispatch<React.SetStateAction<string>>;
}

export const ComplaintsTable = ({ onClickRow, setId }: IComplaintsTable) => {
  const [complaints, setComplaints] = useState<IComplaint[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    api
      .get(`/api/complaints`)
      .then((response) => {
        setComplaints(response.data);
      })
      .catch((e) => {
        setComplaints([]);
        console.log(e);
        alert('erro ao carregar denúncias!');
        navigate('/');
      });
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">status</TableCell>
            <TableCell align="right">comment_id</TableCell>
            <TableCell align="right">user_id</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {complaints.map((complaint) => (
            <TableRow
              key={complaint.id}
              onClick={() => {
                onClickRow(true);
                setId(complaint.id);
              }}
              sx={{
                '&:last-child td, &:last-child th': { border: 0 },
                '&:hover': { cursor: 'pointer' },
              }}
            >
              <TableCell component="th" scope="complaint">
                {complaint.id}
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {complaint.status}
              </TableCell>
              <TableCell align="right">{complaint.comment_id}</TableCell>
              <TableCell align="right">{complaint.user_id}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
