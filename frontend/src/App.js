import "./App.css";
import AppRouteMain from "./routes/index";
import { BrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import Loader from "./components/Loader/Loader";
import { ToastContainer } from "react-toastify";
import { StyledEngineProvider } from "@mui/material";
import "react-toastify/dist/ReactToastify.css";
//import "../src/global.css";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <AppRouteMain />
          <ToastContainer />
        </Suspense>
      </BrowserRouter>
    </StyledEngineProvider>
  );
}

export default App;
