import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AuthService from "../services/auth.service";

const NavBar = () => {
  const [currentUser, setCurrentUser] = useState(undefined);
  const [showClientBoard, setShowClientBoard] = useState(false);
  const [showAgentGuichetBoard, setShowAgentGuichetBoard] = useState(false);
  const [showAgentGuichetGetBoard, setShowAgentGuichetGetBoard] =
    useState(false);
  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setShowClientBoard(user.roles.includes("ROLE_CLIENT"));
      setShowAgentGuichetBoard(user.roles.includes("ROLE_AGENT_GUICHET"));
      setShowAgentGuichetGetBoard(
        user.roles.includes("ROLE_AGENT_GUICHET_GET")
      );
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
    setShowClientBoard(false);
    setShowAgentGuichetBoard(false);
    setShowAgentGuichetGetBoard(false);
    setCurrentUser(undefined);
  };
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <Link to={"/"} className="navbar-brand">
        Formation React 2023
      </Link>
      <div className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to={"/home"} className="nav-link">
            Home
          </Link>
        </li>

        {showAgentGuichetBoard | showAgentGuichetGetBoard && (
          <>
            <li className="nav-item">
              <Link to={"/manage_customers"} className="nav-link">
                Customers Management
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/manage_bankaccounts"} className="nav-link">
                Bank Accounts Management
              </Link>
            </li>
          </>
        )}

        {showClientBoard && (
          <>
            <li className="nav-item">
              <Link to={"/consult_account"} className="nav-link">
                My Bank Account
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add_wirer_transfer"} className="nav-link">
                Wired Transfer
              </Link>
            </li>
          </>
        )}

        {currentUser && (
          <li className="nav-item">
            <Link to={"/profile"} className="nav-link">
              Profile
            </Link>
          </li>
        )}
      </div>

      {currentUser ? (
        <div className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to={"/profile"} className="nav-link">
              {currentUser.username}
            </Link>
          </li>
          <li className="nav-item">
            <a href="/login" className="nav-link" onClick={logOut}>
              LogOut
            </a>
          </li>
        </div>
      ) : (
        <div className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to={"/login"} className="nav-link">
              Login
            </Link>
          </li>

          <li className="nav-item">
            <Link to={"/register"} className="nav-link">
              Sign Up
            </Link>
          </li>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
