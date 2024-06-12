import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useStoreActions, useStoreState } from 'easy-peasy';
import { useEffect } from 'react';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const InfoTable=()=>{
    const {fetchParticipantsData}=useStoreActions(action=>action.participants)
    const {participantsData}=useStoreState(state=>state.participants)
    console.log(participantsData.data)
    useEffect(()=>{
        fetchParticipantsData()
    },[])
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">Dept.</TableCell>
            <TableCell align="right">Gender</TableCell>
            <TableCell align="right">Blood</TableCell>
            <TableCell align="right">Nember of Club</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {participantsData?.data?.map((item) => (
            <TableRow
              key={item.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {item.attributes.name}
              </TableCell>
              <TableCell align="right">{item.attributes.email}</TableCell>
              <TableCell align="right">{item.attributes.phone}</TableCell>
              <TableCell align="right">{item.attributes.department}</TableCell>
              <TableCell align="right">{item.attributes.gender}</TableCell>
              <TableCell align="right">{item.attributes.blood}</TableCell>
              <TableCell align="right">{item.attributes.club_name}</TableCell>
            </TableRow>
          ))}

        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default InfoTable;