import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useStepContext } from "../../../context/StepFormContext";
import {
  TextField,
  Box,
  Grid,
  Autocomplete,
  Button,
  IconButton,
  TextareaAutosize,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const DesignRequestStep1 = () => {
  const [value, setValue] = React.useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();
  const { state, dispatch } = useStepContext();

  const [roomScenesFloorPlans, setRoomScenesFloorPlans] = useState(1);

  const onSubmit = (data) => {
    console.log("DATA STEP 1:", data);
    const payload = {
      ...data,
      roomScenesFloorPlans: roomScenesFloorPlans,
    };
    dispatch({ type: "SET_PROJECT_INFO", payload: payload });
    dispatch({ type: "NEXT_STEP" });
  };

  const incrementRoomScenesFloorPlans = () => {
    setRoomScenesFloorPlans((prevNumber) => Math.max(0, prevNumber + 1));
  };

  const decrementRoomScenesFloorPlans = () => {
    setRoomScenesFloorPlans((prevNumber) => Math.max(0, prevNumber - 1));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container direction="row" className="" spacing={3}>
        <Grid item xs={12} md={6} className="">
          <TextField
            label="Project Name"
            {...register("projectName", {
              required: "Project Name is required",
            })}
            error={!!errors.projectName}
            helperText={errors.projectName ? "Required" : ""}
            fullWidth
            // InputLabelProps={{
            //   shrink: true,
            // }}
          />
        </Grid>
        <Grid item xs={12} md={6} className="">
          <TextField
            label="Project ID"
            type="text"
            {...register("projectID", { required: "Project ID is required" })}
            error={!!errors.projectID}
            helperText={errors.projectID ? "Required" : ""}
            fullWidth
            // InputLabelProps={{
            //   shrink: true,
            // }}
          />
        </Grid>
        <Grid item xs={12} md={6} className="">
          <FormControl fullWidth margin="normal">
            <p style={{ color: 'red' }}>Nihar Pushed Old code to New Autocomplete</p>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={DesignInputType}
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
              renderInput={(params) => (
                <TextField {...params} label="Design Input Type" />
              )}
              {...register("designInputType", {
                required: "Please select an option",
              })}
              error={!!errors.designInputType}
              helperText={
                errors.designInputType ? "Please select an option" : ""
              }
            />
            <InputLabel id="demo-simple-select-label">Design Input Type</InputLabel>
            <Select
            InputLabelProps={{
            shrink: true,
          }}
              {...register("designInputType", {
                required: "Please select an option",
              })}
              error={!!errors.designInputType}
              helperText={
                errors.designInputType ? "Please select an option" : ""
              }
              
              label=""
            >
              <MenuItem value="" disabled>
                Select an option
              </MenuItem>
              <MenuItem value="option1">Upload File</MenuItem>
              <MenuItem value="option2">Choose from library(NA)</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6} className="">
          <Box>
            <InputLabel className="CustomLabel">
              Room scenes/floor plans
            </InputLabel>
            <IconButton
              type="button"
              onClick={decrementRoomScenesFloorPlans}
              className="IncrementNumbers"
            >
              <RemoveIcon />
            </IconButton>
            <TextField
              className="IncrementNumbersTextBox"
              {...register("roomScenesFloorPlans")}
              style={{ width: "50px" }}
              type="text"
              value={roomScenesFloorPlans}
              onChange={(e) =>
                setRoomScenesFloorPlans(parseInt(e.target.value, 10))
              }
              error={roomScenesFloorPlans <= 0 ? true : false}
              helperText={roomScenesFloorPlans <= 0 ? "Cannot be 0" : ""}
            />
            <IconButton
              type="button"
              onClick={incrementRoomScenesFloorPlans}
              className="IncrementNumbers"
            >
              <AddIcon />
            </IconButton>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} className="">
          <p style={{ color: 'red' }}>Nihar Pushed Old code to New Date Picker</p>
          <LocalizationProvider dateAdapter={AdapterDateFns} fullWidth>
            <DatePicker
              className="DatePickerBox"
              label="Requested Completion Date"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              fullWidth
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          
          <TextField
            label="Requested completion date"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              style: {
                lineHeight: 1.25, // Adjust line height as needed
              },
            }}
            placeholder="Select a date"
            {...register("completionDate", {
              required: "Requested completion date is required",
            })}
            error={!!errors.completionDate}
            helperText={errors.completionDate ? "Required" : ""}
            fullWidth
            margin="normal"
          />
        </Grid>
        <Grid item xs={12} md={12} className="">
          {/* <InputLabel className="CustomLabel TextareaLabel">Notes</InputLabel> */}
          <TextareaAutosize
            minRows={8}
            placeholder="Notes"
            {...register("notes")}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={12} className="ActionButtonBox">
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={isSubmitting}
          >
            Next
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
const DesignInputType = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
];
export default DesignRequestStep1;
