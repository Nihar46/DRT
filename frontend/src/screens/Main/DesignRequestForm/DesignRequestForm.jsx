// MultiStepForm.js
import React from "react";
import DesignRequestStep1 from "../DesignRequestStep1/DesignRequestStep1";
import DesignRequestStep2 from "../DesignRequestStep2/DesignRequestStep2";
import DesignRequestStep3 from "../DesignRequestStep3/DesignRequestStep3";
import RequestProgressBar from "../../../components/RequestProgressBar";
import { useStepContext } from "../../../context/StepFormContext";

const DesignRequestForm = () => {
  const { state } = useStepContext();
  console.log("State data:", state);
  return (
    <div>
      <h1>Design Request</h1>
      <RequestProgressBar activeStep={state.step} />

      {state.step === 1 && <DesignRequestStep1 />}
      {state.step === 2 && <DesignRequestStep2 />}
      {state.step === 3 && <DesignRequestStep3 />}
    </div>
  );
};

export default DesignRequestForm;
