import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import LandingPage from "./Components/LandingPage";

import LeadsLandingPage from "./Leads/LeadsLandingPage";
import CodeTypesLandingPage from "./CodeTypes/CodeTypesLandingPage";

import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import CodeTypeValueLandingPage from "./CodeTypeValues/CodeTypeValueLandingPage";
import LeadManagmentLandingPage from "./LeadManagement/LeadManagmentLandingPage";
import Login_Form from "./Login/Login_form";
function App() {
  const [loggedin, setLoggedin] = useState(false);
  return loggedin ? (
    <div className="App">
      <BrowserRouter>
        <LandingPage />
        <Outlet />
        <Routes>
          <Route path="/Leads" element={<LeadsLandingPage />} />
          <Route path="/CodeTypes" element={<CodeTypesLandingPage />} />
          <Route path="/CodeTypeValue" element={<CodeTypeValueLandingPage />} />
          <Route
            path="/LeadManagement"
            element={<LeadManagmentLandingPage />}
          />
        </Routes>
      </BrowserRouter>
    </div>
    
  ) : (
    <Login_Form  onLoginSuccessHandler={()=>setLoggedin(true)}/>
  );
}

export default App;