import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const Table = ({head, body}) => {
  return (
    <TableContainer>
        <Table sx={{ minWidth: 300 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                    {
                        head.map((item, index) => (
                            <TableCell key = {index}>{item}</TableCell>
                        ))
                    }
                </TableRow>
            </TableHead>
            <TableBody>
                
            </TableBody>
        </Table>

    </TableContainer>
  )
}

export default Table