import "./App.css";
import AppRouteMain from "./routes/index";
import { ThemeProvider } from "@emotion/react";
import { BrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import Loader from "./components/Loader/Loader";
import { ToastContainer } from "react-toastify";
import { StyledEngineProvider } from "@mui/material";
import "react-toastify/dist/ReactToastify.css";
import Theme from "./Theme.styles";
import "../src/Global.styles.css";
import { StepProvider } from "./context/StepFormContext";
//import "../src/global.css";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <BrowserRouter>
        <ThemeProvider theme={Theme}>
          <Suspense fallback={<Loader />}>
            <StepProvider>
              <AppRouteMain />
              <ToastContainer />
            </StepProvider>
          </Suspense>
        </ThemeProvider>
      </BrowserRouter>
    </StyledEngineProvider>
  );
}

export default App;
