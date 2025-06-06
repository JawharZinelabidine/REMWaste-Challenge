import { useState } from 'react'
import './App.css'
import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";
import SkipSizePicker from './pages/SkipPicker/SkipSizePicker';
import GlobalStepper from './components/Stepper/Stepper';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

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
                        path="/"
                        element={
                          <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", justifyContent: 'space-between' }}>
                            <GlobalStepper page={3} />
                            <SkipSizePicker />
                          </ div>
                        }
                      />
                      {/* <Route path="/*" element={<ErrorPage />} /> */}
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