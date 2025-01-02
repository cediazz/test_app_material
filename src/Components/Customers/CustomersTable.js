import * as React from 'react'
import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import DeleteCustomer from '../DeleteCustomer/DeleteCustomer'
import IconButton from '@mui/material/IconButton'
import EditIcon from '@mui/icons-material/Edit'
import { Link } from "react-router-dom"

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


export default function CustomersTable(props) {
  return (
    <TableContainer component={Paper} sx={{ marginTop: 3 }} >
      <Table tableLayout="fixed">
        <TableHead>
          <TableRow>
            <StyledTableCell>Nombre</StyledTableCell>
            <StyledTableCell>Identificación</StyledTableCell>
            <StyledTableCell >Acciones</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.customers.map((customer) => (
            <StyledTableRow key={customer.id}>
              <StyledTableCell>{customer.nombre} {customer.apellidos}</StyledTableCell>
              <StyledTableCell >{customer.identificacion}</StyledTableCell>
              <StyledTableCell >
                <Stack direction="row" spacing={1}>
                  <IconButton aria-label="edit">
                    <Link to={`/customer-maintenance/${customer.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                      <EditIcon />
                    </Link>
                  </IconButton>
                  <DeleteCustomer customer={customer} />
                </Stack>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

  );
}
