import React from "react";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Profile from "./Profile";
import CustomerComponent from "./CustomerComponent";
import BankAccount from "./BankAccount";
import WirerTransfert from "./WirerTransfert";
import { Route, Routes } from "react-router-dom";

const RoutesApplications = () => {
  return (
    <div className="container mt-3">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/manage_customers" element={<CustomerComponent />} />
        <Route path="/manage_bankaccounts" element={<BankAccount />} />
        <Route path="/add_wirer_transfer" element={<WirerTransfert />} />
        <Route path="/consult_account" element={<BankAccount />} />
      </Routes>
    </div>
  );
};

export default RoutesApplications;
