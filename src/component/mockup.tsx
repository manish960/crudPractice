import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ReduxAction from "../redux/action/mockup";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CircularProgress from "@mui/material/CircularProgress";
import Avatar from "@mui/material/Avatar";
import AddIcon from "@mui/icons-material/Add";
import Pagination from '@mui/material/Pagination';

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

const Mockup = () => {
  const { mockupReducer }:any = useSelector((state) => state);
  const dispatch:any = useDispatch();
  const [name, setName] = useState();
  const [open, setOpen] = useState(false);
  const [openUser, setOpenUser] = useState(false);
  const [currentpage , setcurrentpage] = useState(0);
  const [nextPage , setNextPage] = useState(10)
  const [pageNo , setpageNo] = useState(1)

  const [id, setId] = useState();
  console.log("yeh bhi ")
  useEffect(() => {
    console.log(name);
    console.log("this is id", id);
  }, [name, id]);

  useEffect(() => {
    dispatch(ReduxAction.fetchMockup());
  }, [dispatch]);

  const handleDelete = (id:any) => {
    dispatch(ReduxAction.deltemockup(id));
  };

  const showData = () => {
    const handleClickOpen = (id:any, name:any) => {
      setOpen(true);
      setId(id);
      setName(name);
    };

    const handleClickOpenUser = () => {
      setOpenUser(true);
      setId(id);
    };

    const handleClose = () => {
      setOpen(false);
    };
    const handleCloseUser = () => {
      setOpenUser(false);
    };

    const handleSubmit = (id:any, name:any) => {
      setTimeout(() => {
        if ((name !== null || name !== undefined) && id !== undefined) {
          console.log("name & id state has updated state");
          dispatch(ReduxAction.updateMockup(id, name));
        } else {
          console.log("breaking");
        }
      }, 1000);
      handleClose();
    };
    const handleSubmitUser = (name:any) => {
      if (name !== null || name !== undefined) {
        console.log("name state has updated state");
        dispatch(ReduxAction.createMockup(name));
      } else {
        console.log("breaking");
      }
      handleCloseUser();
    };

    const hanldePagination = (e:any,value:any)=>{
      let temp  = (10*value)-10;
      setcurrentpage(temp)
      setNextPage(10*value)
      setpageNo(value)
    }

    if (mockupReducer.loading) {
      return (
        <Box textAlign="center">
          <CircularProgress color="secondary" />
        </Box>
      );
    } else {
      return (
        <>
          <Box textAlign="center">
            <Button
              variant="contained"
              color="warning"
              style={{ margin: "10px" }}
              onClick={() => {
                handleClickOpenUser();
              }}
            >
              Add user{" "}
              <AddIcon style={{ paddingLeft: "6px", paddingRight: "4px" }} />
            </Button>
          </Box>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>ID</StyledTableCell>
                  <StyledTableCell align="left">Avatar</StyledTableCell>
                  <StyledTableCell align="center">First Name</StyledTableCell>
                  <StyledTableCell align="center">Action</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {mockupReducer.data.slice(currentpage,nextPage).map((res:any) => (
                  <StyledTableRow key={res.id}>
                    <StyledTableCell component="th" scope="row">
                      {res.id}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <Avatar alt="Remy Sharp" src={res.avatar} />
                    </StyledTableCell>
                    <StyledTableCell align="center">{res.name}</StyledTableCell>
                    <StyledTableCell align="center">
                      <Button
                        variant="contained"
                        style={{ marginRight: "8px" }}
                        value={name}
                        onClick={() => {
                          handleClickOpen(res.id, res.name);
                        }}
                      >
                        <EditIcon />
                      </Button>
                      <Button
                        variant="contained"
                        color="error"
                        onClick={() => handleDelete(res.id)}
                      >
                        <DeleteForeverIcon />
                      </Button>
                    </StyledTableCell>
                  </StyledTableRow>
                ))} 
              </TableBody>
            </Table>
            <Pagination count={Math.ceil(mockupReducer.data.length/10)} page={pageNo} onChange={hanldePagination} color="secondary" />
          </TableContainer>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Update the Data</DialogTitle>
            <DialogContent>
              <DialogContentText>
                please enter your name here. We will send updates occasionally.
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Name"
                type="text"
                fullWidth
                variant="standard"
                value={name}
                onChange={(e:any) => {
                  setName(e.target.value);
                }}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={() => handleSubmit(id, name)}>Submit</Button>
            </DialogActions>
          </Dialog>

          {/* <----------------------------------user dialog------------------------------------> */}

          <Dialog open={openUser} onClose={handleCloseUser}>
            <DialogTitle>Add the User Data</DialogTitle>
            <DialogContent>
              <DialogContentText>
                please enter your name here. We will send updates occasionally.
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Name"
                type="text"
                fullWidth
                variant="standard"
                onChange={(e:any) => {
                  setName(e.target.value);
                }}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseUser}>Cancel</Button>
              <Button onClick={() => handleSubmitUser(name)}>Submit</Button>
            </DialogActions>
          </Dialog>
          
        </>
      );
    }
  };

  return <div>{showData()}</div>;
};

export default Mockup;
