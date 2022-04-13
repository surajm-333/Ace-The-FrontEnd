import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./context/AuthContext";
import Accounts from "./components/Dashboard/Accounts";
import Generator from "./components/Dashboard/Generator";
import AuthScreen from "./screens/auth";
import Dashboard from "./screens/dashboard";
import AuthGuard from "./components/Guard";

const App = () => {
  return (
    <AuthProvider>
      <ToastContainer position="bottom-right" />
      <Routes>
        <Route path="/" element={<AuthScreen />} />
        <Route path="/generator" element={<Generator />} />
        <Route element={<AuthGuard />}>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="accounts" element={<Accounts />} />
            <Route path="generator" element={<Generator />} />
          </Route>
        </Route>
      </Routes>
    </AuthProvider>
  );
};

export default App;
