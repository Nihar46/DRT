// StepContext.js
import React, { createContext, useContext, useReducer } from "react";

const StepContext = createContext();

const initialState = {
  step: 1,
  projectInformation: {},
  designDetails: {},
  confirmAndSubmit: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "NEXT_STEP":
      return { ...state, step: state.step + 1 };
    case "PREV_STEP":
      return { ...state, step: state.step - 1 };
    case "SET_PROJECT_INFO":
      return { ...state, projectInformation: action.payload };
    case "SET_DESIGN_DETAILS":
      return {
        ...state,
        designDetails: {
          ...state.designDetails,
          ...action.payload,
        },
      };
    case "SET_CONFIRM_SUBMIT":
      return { ...state, confirmAndSubmit: action.payload };
    case "RESET_STATE":
      return initialState;
    default:
      return state;
  }
};

const StepProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StepContext.Provider value={{ state, dispatch }}>
      {children}
    </StepContext.Provider>
  );
};

const useStepContext = () => {
  const context = useContext(StepContext);
  if (!context) {
    throw new Error("useStepContext must be used within a StepProvider");
  }
  return context;
};

export { StepProvider, useStepContext };
