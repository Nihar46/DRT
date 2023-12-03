// Step3.js
import React from "react";
import { useStepContext } from "../../../context/StepFormContext";

const DesignRequestStep3 = () => {
  const { state } = useStepContext();

  return (
    <div>
      <h2>Step 3</h2>
      {/* Display data from Step 1 and Step 2 */}
      <p>Project ID: {state.projectInformation.projectID}</p>
      <p>
        Requested completion date: {state.projectInformation.completionDate}
      </p>
      <p>
        Room scenes/floor plans: {state.projectInformation.roomScenesFloorPlans}
      </p>
      <p>Notes: {state.projectInformation.notes}</p>

      {/* Display data from Step 2 (design details) */}
      {/* You can iterate over design options and display their details */}
      {state.designDetails.map((designOption, index) => (
        <div key={index}>
          <h3>Design Option {index + 1}</h3>
          {/* Display design option details */}
        </div>
      ))}
    </div>
  );
};

export default DesignRequestStep3;
