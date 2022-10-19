import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container } from "@mui/material";
import './Rank.scss';
function createData(rank, name, point, ratio) {
  return {  rank, name, point, ratio };
}

const rows = [
  createData( 1, 'Trần Võ Linh', 25, '23/22/32'),
  createData( 2, 'Trần Võ Linh', 24, '23/22/33'),
  createData( 3, 'Trần Võ Linh', 23, '23/22/34'),
  createData( 4, 'Trần Võ Linh', 22, '23/22/35'),
];

const Rank = () => {
  return (
    <div className="rank">
    <Container>

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Xếp hạng</TableCell>
            <TableCell align="center">Kỳ thủ</TableCell>
            <TableCell align="center">Điểm</TableCell>
            <TableCell align="center">Đã thắng / Hòa cờ / Thua</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center" 
              className='td'
              >
                <div className = {`${row.rank === 1 ? 'gold' : ''}  ${row.rank === 2 ? 'silver' : ''} ${row.rank === 3 ? 'copper' : ''}`}  >

                {row.rank}
                </div>
                
                </TableCell>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.point}</TableCell>
              <TableCell align="center">{row.ratio}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
    </div>
  )
}

export default Rank