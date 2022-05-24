import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { fetchRequest } from "../redux/action/Users-action";
import { useSelector,useDispatch } from "react-redux";
import { useState } from "react";
import Button from '@mui/material/Button';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import Pagination from '@mui/material/Pagination';
import axios from "axios"

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));



const Users = () => {

  const myState = useSelector((state)=>state.apiReducer)
  const dispatch = useDispatch();
  const [page,setPage]=useState(1);

  const handleChange = (event, value) => {
    setPage(value);
    console.log(value);
  };

const handleDelete = async id =>{
  await axios.delete(`https://reqres.in/api/users/${id}`  )
}
  useEffect(()=>{
    console.log("testing");
    dispatch(fetchRequest(page));
  },[page]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell align="center">Email</StyledTableCell>
            <StyledTableCell align="center">First Name</StyledTableCell>
            <StyledTableCell align="center">Last Name</StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {myState && myState.user ?  (myState.user.data.map((data) => (
            <StyledTableRow key={data.id}>
              <StyledTableCell component="th" scope="row">
                {data.id}
              </StyledTableCell>
              <StyledTableCell align="center">{data.email}</StyledTableCell>
              <StyledTableCell align="center">{data.first_name}</StyledTableCell>
              <StyledTableCell align="center">{data.last_name}</StyledTableCell>
              <StyledTableCell align="center"><Button variant="contained" style={{marginRight:'8px'}}><EditIcon/></Button>
              <Button variant="contained" color="error" onClick={()=>{handleDelete(data.id)}} ><DeleteForeverIcon/></Button></StyledTableCell>
            
            </StyledTableRow>
            
          ))):'no'}
          <Pagination count={3} page={page} onChange={handleChange}  />
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Users;
