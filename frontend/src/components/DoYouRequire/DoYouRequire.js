import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const CounterButton = ({ label, count, onIncrement, onDecrement }) => (
  <Box display="flex" alignItems="center">
    <Button onClick={onDecrement} disabled={count <= 0}>
      <RemoveIcon fontSize="small" />
    </Button>
    <Typography variant="body1" style={{ margin: "0 10px" }}>
      {label} {count}
    </Typography>
    <Button onClick={onIncrement}>
      <AddIcon fontSize="small" />
    </Button>
  </Box>
);

const DoYouRequire = ({
  count2D,
  setCount2D,
  count3D,
  setCount3D,
  isGenericPattern,
  setIsGenericPattern,
}) => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <CounterButton
        label="2D"
        count={count2D}
        onIncrement={() => setCount2D(count2D + 1)}
        onDecrement={() => setCount2D(Math.max(count2D - 1, 0))}
      />
      <CounterButton
        label="3D"
        count={count3D}
        onIncrement={() => setCount3D(count3D + 1)}
        onDecrement={() => setCount3D(Math.max(count3D - 1, 0))}
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={isGenericPattern}
            onChange={(e) => setIsGenericPattern(e.target.checked)}
            name="genericPattern"
          />
        }
        label="and/or Generic Pattern Guide"
      />
    </Box>
  );
};

export default DoYouRequire;
