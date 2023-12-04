import React, { useContext } from "react";
import {
  Container,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Paper,
  Button,
} from "@mui/material";
import { useStepContext } from "../../../context/StepFormContext"; // Adjust the import path accordingly
import RequestStep2Accordion from "../../../components/RequestStep2Accordion";

const DesignRequestStep3 = () => {
  const { state, dispatch } = useStepContext();
  console.log("STEP 2:", state);

  // Generate dropdowns for room scenes

  return <div>Hello</div>;
};

export default DesignRequestStep3;
