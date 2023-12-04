import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useStepContext } from "../../../context/StepFormContext";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const DesignRequestStep1 = () => {
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
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        width: "300px", // Set your preferred width
        margin: "0 auto", // Center the form
      }}
    >
      <TextField
        label="Project Name"
        {...register("projectName", { required: "Project Name is required" })}
        error={!!errors.projectName}
        helperText={errors.projectName ? "Required" : ""}
      />

      <TextField
        label="Project ID"
        type="text"
        {...register("projectID", { required: "Project ID is required" })}
        error={!!errors.projectID}
        helperText={errors.projectID ? "Required" : ""}
      />

      <FormControl fullWidth margin="normal">
        <InputLabel>Design input type</InputLabel>
        <Select
          {...register("designInputType", {
            required: "Please select an option",
          })}
          error={!!errors.designInputType}
          helperText={errors.designInputType ? "Please select an option" : ""}
          displayEmpty
        >
          <MenuItem value="" disabled>
            Select an option
          </MenuItem>
          <MenuItem value="option1">Upload File</MenuItem>
          <MenuItem value="option2">Choose from library(NA)</MenuItem>
        </Select>
      </FormControl>

      <Box display="flex" alignItems="center" margin="normal">
        <InputLabel>Room scenes/floor plans</InputLabel>
        <IconButton type="button" onClick={decrementRoomScenesFloorPlans}>
          <RemoveIcon />
        </IconButton>
        <TextField
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
        <IconButton type="button" onClick={incrementRoomScenesFloorPlans}>
          <AddIcon />
        </IconButton>
      </Box>

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

      <TextareaAutosize
        minRows={3}
        placeholder="Notes"
        {...register("notes")}
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={isSubmitting}
      >
        Next
      </Button>
    </form>
  );
};

export default DesignRequestStep1;
