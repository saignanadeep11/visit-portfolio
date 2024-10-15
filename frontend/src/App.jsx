import { useState } from "react";
import "./App.css";
import Login from "./components/userComponent/Login";
import SignUp from "./components/userComponent/SignUp";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/cvComponent/About";
import Experience from "./components/cvComponent/Experience";
import ProtectedRoute from "./components/utils/ProtectedRoute";
import UserHome from "./components/userHomeComponent/UserHome";
import LogRoute from "./components/utils/LogRoute";
import VerifyEmail from "./components/userHomeComponent/VerifyEmail";
import MailLink from "./components/userHomeComponent/MailLink";
import Admin from "./components/userHomeComponent/Admin";
import AdminRoute from "./components/utils/AdminRoute";
import GetCv from "./components/cvComponent/GetCv";
import MakeCv from "./components/cvComponent/MakeCv";
import PageNotFound from "./components/userComponent/PageNotFound";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/:uuid" element={<GetCv />} />
          <Route path="/:uuid/About" element={<About />} />
          <Route path="/:uuid/Experience" element={<Experience />} />

          <Route element={<LogRoute />}>
            <Route path="/login" element={<Login />} />
            <Route path="/SignUp" element={<SignUp />} />
          </Route>

          <Route element={<ProtectedRoute />}>
            <Route path="/MakeCv" element={<MakeCv />} />
            <Route path="/home" element={<UserHome />} />
            <Route path="/" element={<UserHome />} />
          </Route>
          <Route path="/verifyMail/:token" element={<VerifyEmail />} />
          <Route path="/sendMail" element={<MailLink />} />
          <Route element={<AdminRoute />}>
            <Route path="/admin" element={<Admin />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/PageNotFound" element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
