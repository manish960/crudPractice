import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ReduxAction from "./../redux/action/mockup";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
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
  const [open, setOpen] = useState(false);
  const [name, setName] = useState();
  const [id, setId] = useState();
  const [openUser,setOpenUser]=useState();
  const { mockupReducer } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ReduxAction.fetchMockup());
  }, [dispatch]);

  useEffect(() => {
    console.log(name);
  }, [name]);

  const handleDelete = (id) => {
    dispatch(ReduxAction.deltemockup(id));
  };

  const showData = () => {
    const handleClickOpen = (id, name) => {
      setOpen(true);
      setId(id);
      setName(name);
    };
    const handleClickOpenUser = () => {
        setOpenUser(true);
        // setId(id);
        // setName(name);
      };
    const handleSubmit = (id, name) => {
      if ((name !== null || name !== undefined) && id !== undefined) {
        dispatch(ReduxAction.updateMockup(id, name));
      } else {
        console.log("name & id has null value");
      }
      handleClose();
    };
    const handleSubmitUser = (name) => {
        if (name !== null || name !== undefined) {
            console.log('updating..');
          dispatch(ReduxAction.createMockup(name));
        } else {
          console.log("name & id has null value");
        }
        handleCloseUser();
      };

    const handleClose = () => {
      setOpen(false);
    };
    const handleCloseUser =()=>{
        setOpenUser(false);
    }
    const handlechange = () => {};

    if (mockupReducer.loading) {
      return (
        <Box textAlign="center">
          <CircularProgress color="secondary" />
        </Box>
      );
    } else {
      return (
        <>
        <Box textAlign='center'>
          <Button
            variant="contained"
            style={{ marginRight: "6px" }}
            onClick={() => handleClickOpenUser()}
          >

            Add user
          </Button>
          </Box>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>ID</StyledTableCell>
                  <StyledTableCell align="right">Avatar</StyledTableCell>
                  <StyledTableCell align="right">Name</StyledTableCell>
                  <StyledTableCell align="right">Action</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {mockupReducer.data.map((res) => (
                  <StyledTableRow key={res.id}>
                    <StyledTableCell component="th" scope="row">
                      {res.id}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <Avatar alt="Travis Howard" src={res.avatar} />
                    </StyledTableCell>
                    <StyledTableCell align="right">{res.name}</StyledTableCell>
                    <StyledTableCell align="right">
                      <Button
                        variant="contained"
                        style={{ marginRight: "6px" }}
                        onClick={() => handleClickOpen(res.id, res.name)}
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
                onChange={(e) => {
                  handlechange(setName(e.target.value));
                }}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={() => handleSubmit(id, name)}>Subscribe</Button>
            </DialogActions>
          </Dialog>

          {/* dialog for user */}
          <Dialog open={openUser} onClose={handleCloseUser}>
            <DialogTitle>Add the Data</DialogTitle>
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
                onChange={(e) => {
                  handlechange(setName(e.target.value));
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
