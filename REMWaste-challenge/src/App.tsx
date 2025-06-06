import { useState } from 'react'
import './App.css'
import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";
import SkipSizePicker from './pages/SkipPicker/SkipSizePicker';
import GlobalStepper from './components/Stepper/Stepper';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import WasteType from './pages/WasteType/WasteType';
import PermitCheck from './pages/PermitCheck/PermitCheck';

function App() {


  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const containerClass = "main-container";
  const containerClass2 = "app-body";


  return (
    <Router>
      <div>
        <div className={containerClass}>
          <Routes>
            <Route
              path="/*"
              element={
                <>
                  <div className={containerClass2}>
                    {/* <NavBar /> */}
                    <Routes>
                      <Route
                        path="/waste-type"
                        element={
                          <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", justifyContent: 'space-between' }}>
                            <GlobalStepper page={2} />
                            <WasteType />
                          </ div>
                        }
                      />
                      <Route
                        path="/"
                        element={
                          <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", justifyContent: 'space-between' }}>
                            <GlobalStepper page={3} />
                            <SkipSizePicker />
                          </ div>
                        }
                      />
                      <Route
                        path="/permit-check"
                        element={
                          <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", justifyContent: 'space-between' }}>
                            <GlobalStepper page={4} />
                            <PermitCheck />
                          </ div>
                        }
                      />
                    </Routes>
                    {/* <Footer /> */}
                  </div>
                </>
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;