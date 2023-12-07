import React, { useState } from "react";
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Modal,
  Button,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TextField,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Stack,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import RefreshIcon from "@mui/icons-material/Refresh";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const UsersTab = () => {
  const [filters, setFilters] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const [users] = useState([
    {
      id: 1,
      name: "Jyoti Account Manager",
      email: "jyoti.account@tarkett.com",
      userType: "accountManager",
    },
    {
      id: 2,
      name: "Nihar Admin",
      email: "nihar.admin@tarkett.com",
      userType: "admin",
    },
    {
      id: 3,
      name: "Zarrar Admin+Designer",
      email: "zarrar.admindesigner@tarkett.com",
      userType: "adminDesigner",
    },
    {
      id: 4,
      name: "Jyoti Designer",
      email: "jyoti.designer@tarkett.com",
      userType: "designer",
    },
    {
      id: 5,
      name: "Ubaid Designer",
      email: "Ubaid.designer@tarkett.com",
      userType: "designer",
    },
    // ...add more users as needed
  ]);

  const handleFilterChange = (event) => {
    setFilters({
      ...filters,
      [event.target.name]: event.target.checked,
    });
  };

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };
  const handleEditClick = () => {
    console.log("Edit button clicked");
  };

  const handleDeleteClick = () => {
    console.log("Delete button clicked");
  };

  const handleResetPasswordClick = () => {
    console.log("Reset password button clicked");
  };
  // Filter users based on the selected user types or show all if no filters are set
  const isAnyFilterActive = Object.values(filters).some(Boolean); // Check if any filter is active
  const filteredUsers = isAnyFilterActive
    ? users.filter((user) =>
        Object.entries(filters).some(
          ([key, value]) => value && user.userType === key
        )
      )
    : users; // If no filters are active, show all users

  const searchedAndFilteredUsers = filteredUsers.filter((user) => {
    //user.name.toLowerCase().includes(searchTerm) ||
    //user.email.toLowerCase().includes(searchTerm),
    // Escape special characters and split the searchTerm into an array of characters
    const searchTermChars = searchTerm
      .replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
      .split("");

    // Create a regex pattern to match all characters in any order
    const regexPattern = searchTermChars
      .map((char) => `(?=.*${char})`)
      .join("");
    const searchRegex = new RegExp(regexPattern, "i"); // 'i' for case-insensitive

    return searchRegex.test(user.name) || searchRegex.test(user.email);
  });

  const handleAddNewUser = () => {
    console.log("User Added");
    setModalOpen(false);
  };

  return (
    <>
      <Box sx={{ p: 2 }}>
        <FormGroup row>
          <FormControlLabel
            control={
              <Checkbox
                checked={!!filters["accountManager"]}
                onChange={handleFilterChange}
                name="accountManager"
              />
            }
            label="Show Account Managers"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={!!filters["designer"]}
                onChange={handleFilterChange}
                name="designer"
              />
            }
            label="Show Designers"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={!!filters["admin"]}
                onChange={handleFilterChange}
                name="admin"
              />
            }
            label="Show Admins"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={!!filters["adminDesigner"]}
                onChange={handleFilterChange}
                name="adminDesigner"
              />
            }
            label="Show Admin/Designers"
          />
        </FormGroup>
        <TextField
          label="Search"
          variant="outlined"
          value={searchTerm}
          onChange={handleSearchChange}
          sx={{ mb: 2, width: "100%" }}
        />
        <Button variant="contained" onClick={handleOpenModal} sx={{ my: 2 }}>
          Add New User
        </Button>

        <Modal
          open={modalOpen}
          onClose={handleCloseModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={modalStyle}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Add New User
            </Typography>
            <TextField label="Name" fullWidth sx={{ my: 2 }} />
            <TextField label="Email" fullWidth sx={{ my: 2 }} />
            <TextField label="User Type" fullWidth sx={{ my: 2 }} />
            <Button
              onClick={handleCloseModal}
              variant="contained"
              color="primary"
            >
              Close
            </Button>
            <Button onClick={handleAddNewUser}>Add</Button>
          </Box>
        </Modal>

        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>User Type</TableCell>
                <TableCell align="center">Reset Password</TableCell>
                <TableCell align="center">Edit</TableCell>
                <TableCell align="center">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {searchedAndFilteredUsers.length > 0 ? (
                searchedAndFilteredUsers.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.userType}</TableCell>
                    <TableCell align="center">
                      <IconButton
                        onClick={handleResetPasswordClick}
                        aria-label="reset password"
                      >
                        <RefreshIcon />
                      </IconButton>
                    </TableCell>
                    <TableCell align="center">
                      <IconButton onClick={handleEditClick} aria-label="edit">
                        <EditIcon />
                      </IconButton>
                    </TableCell>
                    <TableCell align="center">
                      <IconButton
                        onClick={handleDeleteClick}
                        aria-label="delete"
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={6} align="center">
                    No users found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default UsersTab;
