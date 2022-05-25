// import React, { useState } from 'react';
import { fetchRequest } from "../redux/action";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import Button from "@mui/material/Button";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import Pagination from "@mui/material/Pagination";

const UserData = () => {
  const myState = useSelector((state) => state.apiReducer);
  const dispatch = useDispatch();
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
  // useEffect(() => {
  //   dispatch(fetchRequest());
  // }, []);
  return (
    <>
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
          {myState && myState.user ?  (myState.user.data.map((data1) => (
            <StyledTableRow key={data1.id}>
              <StyledTableCell component="th" scope="row">
                {data1.id}
              </StyledTableCell>
              <StyledTableCell align="center">{data1.email}</StyledTableCell>
              <StyledTableCell align="center">{data1.name}</StyledTableCell>
              <StyledTableCell align="center">{data1.username}</StyledTableCell>
              <StyledTableCell align="center"><Button variant="contained" style={{marginRight:'8px'}}><EditIcon/></Button>
              <Button variant="contained" color="error" ><DeleteForeverIcon/></Button></StyledTableCell>
            
            </StyledTableRow>
            
          ))):'no'}
         
        </TableBody>
      </Table>
    </TableContainer>
        

      <button
        onClick={() => {
          dispatch(fetchRequest());
        }}
      >
        fetch
      </button>
    </>
  );
};

export default UserData;
