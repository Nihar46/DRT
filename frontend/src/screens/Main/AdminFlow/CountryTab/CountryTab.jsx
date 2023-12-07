import React, { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  Modal,
  Paper,
  Table,
  TableBody,
  TableCell,
  Autocomplete,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  MenuItem,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

const initialCountries = [
  {
    id: 1,
    name: "Australia",
    regions: "(394, 60) (593, 60) (392, 60)",
    admin: "Shilpa Nair",
  },
  {
    id: 2,
    name: "India",
    regions: "(172, 362) (162, 174) (32)",
    admin: "Ashish Malvadkar",
  },
  { id: 3, name: "UAE", regions: "(13,14) (12,14)", admin: "Jyoti Admin" },
  {
    id: 4,
    name: "United State",
    regions: "(124,32) (141,132) (169,32) (168,32) (140,32)",
    admin: "Parvaz Patel",
  },
  // ... add more countries as needed
];

const CountryTab = () => {
  const [countries, setCountries] = useState(initialCountries);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);

  // State to store multiple region-division pairs
  const [regionDivisions, setRegionDivisions] = useState([
    { region: "", division: "" },
  ]);
  const [countryName, setCountryName] = useState("");
  const [assignedAdmin, setAssignedAdmin] = useState("");

  // Add a new region-division pair to the state
  const handleAddRegionDivision = () => {
    setRegionDivisions([...regionDivisions, { region: "", division: "" }]);
  };

  // Update a specific region-division pair in the state
  const handleRegionDivisionChange = (index, type, value) => {
    const updatedRegionDivisions = regionDivisions.map((item, i) => {
      if (i === index) {
        return { ...item, [type]: value };
      }
      return item;
    });
    setRegionDivisions(updatedRegionDivisions);
  };

  // Remove a specific region-division pair from the state
  const handleRemoveRegionDivision = (index) => {
    setRegionDivisions(regionDivisions.filter((_, i) => i !== index));
  };

  // Save the new country with all region-division pairs

  const handleSaveCountry = () => {
    // Logic to add new country
    console.log("Country Name:", countryName);
    console.log("Assigned Admin:", assignedAdmin);
    console.log("Region-Division Pairs:", regionDivisions);
    console.log("Add new country");
    setModalOpen(false); // Close modal after adding
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredCountries = searchTerm
    ? countries.filter((country) => {
        //country.name.toLowerCase().includes(searchTerm) ||
        //country.regions.toLowerCase().includes(searchTerm) ||
        //country.admin.toLowerCase().includes(searchTerm),
        // Escape special characters and split the searchTerm into an array of characters
        const searchTermChars = searchTerm
          .replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
          .split("");

        // Create a regex pattern to match all characters in any order
        const regexPattern = searchTermChars
          .map((char) => `(?=.*${char})`)
          .join("");
        const searchRegex = new RegExp(regexPattern, "i"); // 'i' for case-insensitive

        return (
          searchRegex.test(country.name) || searchRegex.test(country.admin)
        );
      })
    : countries;

  const handleDelete = (id) => {
    // Implement delete logic
    console.log("Delete country with id:", id);
  };

  const handleEdit = (id) => {
    // Implement edit logic
    console.log("Edit country with id:", id);
  };

  const admins = ["Nihar", "Jyoti", "Karina"];

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    outline: "none", // to remove the default focus outline
  };

  return (
    <Box sx={{ p: 2 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        <TextField
          label="Search"
          variant="outlined"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <Button
          variant="contained"
          onClick={() => setModalOpen(true)}
          sx={{ ml: 2 }}
        >
          Add New Country
        </Button>
      </Box>

      <Modal
        open={isModalOpen}
        onClose={() => setModalOpen(false)}
        aria-labelledby="add-country-modal-title"
        aria-describedby="add-country-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography id="add-country-modal-title" variant="h6" component="h2">
            Add Country
          </Typography>
          <TextField
            label="Country Name"
            value={countryName}
            onChange={(e) => setCountryName(e.target.value)}
            margin="normal"
            fullWidth
          />
          <Autocomplete
            options={admins}
            value={assignedAdmin}
            onChange={(event, newValue) => {
              setAssignedAdmin(newValue);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Assigned Admin"
                margin="normal"
                fullWidth
              />
            )}
          />
          {regionDivisions.map((pair, index) => (
            <Box
              key={index}
              sx={{ display: "flex", alignItems: "center", mt: 2 }}
            >
              <TextField
                label="Regions"
                value={pair.region}
                onChange={(e) =>
                  handleRegionDivisionChange(index, "region", e.target.value)
                }
                margin="normal"
                sx={{ mr: 1 }}
              />
              <TextField
                label="Divisions"
                value={pair.division}
                onChange={(e) =>
                  handleRegionDivisionChange(index, "division", e.target.value)
                }
                margin="normal"
                sx={{ mr: 1 }}
              />
              <IconButton onClick={() => handleRemoveRegionDivision(index)}>
                <DeleteIcon />
              </IconButton>
            </Box>
          ))}
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
            <Button onClick={() => setModalOpen(false)}>Cancel</Button>
            <Button startIcon={<AddIcon />} onClick={handleAddRegionDivision}>
              Add
            </Button>
            <Button onClick={handleSaveCountry}>Save</Button>
          </Box>
        </Box>
      </Modal>

      <TableContainer component={Paper}>
        <Table aria-label="countries table">
          <TableHead>
            <TableRow>
              <TableCell>Country Name</TableCell>
              <TableCell>Regions-Divisions</TableCell>
              <TableCell>Assigned Admin</TableCell>
              <TableCell align="center">Edit</TableCell>
              <TableCell align="center">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredCountries.length > 0 ? (
              filteredCountries.map((country) => (
                <TableRow key={country.id}>
                  <TableCell>{country.name}</TableCell>
                  <TableCell>{country.regions}</TableCell>
                  <TableCell>{country.admin}</TableCell>
                  <TableCell align="center">
                    <IconButton onClick={() => handleEdit(country.id)}>
                      <EditIcon />
                    </IconButton>
                  </TableCell>
                  <TableCell align="center">
                    <IconButton onClick={() => handleDelete(country.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} align="center">
                  No countries found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default CountryTab;
