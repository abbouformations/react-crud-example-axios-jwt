import React, { useState, useEffect } from "react";

import AuthService from "../services/auth.service";

const Profile = () => {
  const [jwtToken, setJwtToken] = useState("");
  const [username, setUsername] = useState("");
  const [roles, setRoles] = useState("");

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setJwtToken(user.jwtToken);
      setUsername(user.username);
      setRoles(user.roles);
    }
  }, []);

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>Usrename : {username}</h3>
        <br />
        <h3>Token : {jwtToken}</h3>
        <br />
        <h3>Roles list : </h3>

        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Role name</th>
            </tr>
          </thead>
          <tbody>
            {roles instanceof Array &&
              roles.map((role, index) => {
                return (
                  <tr>
                    <td>{role}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </header>
    </div>
  );
};

export default Profile;
