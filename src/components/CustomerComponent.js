import React, { useState, useEffect } from "react";
import CustomerList from "./CustomerList";
import CustomersService from "../services/customers.service";
import AuthService from "../services/auth.service";

const CustomerComponent = () => {
  /* state definition  */
  const [id, setId] = useState("");
  const [identityRef, setIdentityRef] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [messageInfo, setMessageInfo] = useState("");
  const [messageError, setMessageError] = useState("");
  const [customers, setCustomers] = useState([]);

  const [showAgentGuichetBoard, setShowAgentGuichetBoard] = useState(false);

  async function save(event) {
    event.preventDefault();
    if (id) {
      await CustomersService.updateCustomer(
        identityRef,
        firstname,
        lastname,
        username
      ).then((result) => setMessageInfo("Customer updated with success"));
    } else {
      await CustomersService.createCustomer(
        identityRef,
        firstname,
        lastname,
        username
      ).then((result) => setMessageInfo("Customer added with success"));
    }
    // reset state
    setId("");
    setFirstname("");
    setLastname("");
    setIdentityRef("");
    setUsername("");
    loadCustomers();
    setMessageError("");
  }

  async function editCustomer(customers) {
    setFirstname(customers.firstname);
    setLastname(customers.lastname);
    setIdentityRef(customers.identityRef);
    setUsername(customers.username);
    setId(customers.id);
    setMessageError("");
    setMessageInfo("");
  }

  async function deleteCustomer(id) {
    setMessageError("");
    setMessageInfo("");
    await CustomersService.deleteCustomer(id)
      .then((result) => {
        setMessageInfo(result.data);
      })
      .catch((e) => {
        console.log(e);
        setMessageError(e.response.data.message);
      });
    loadCustomers();
  }

  /* end handlers */

  /* jsx */

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setShowAgentGuichetBoard(user.roles.includes("ROLE_AGENT_GUICHET"));
    }

    if (user) (async () => await loadCustomers())();
  }, []);

  async function loadCustomers() {
    await CustomersService.getCustomers()
      .then((result) => {
        setCustomers(result.data);
      })
      .catch((e) => {
        console.log(e);
        //setMessageError(e.message);
        setMessageError(e.response.data.details);
      });
  }

  return (
    <div className="container mt-4">
      <div className="container">
        {messageError && (
          <div className="alert alert-danger" role="alert">
            {messageError}
          </div>
        )}
        {messageInfo && (
          <div className="alert alert-success" role="alert">
            {messageInfo}
          </div>
        )}
      </div>

      {showAgentGuichetBoard && (
        <form>
          <div className="form-group my-2">
            <input
              hidden
              type="text"
              className="form-control"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            <label>Lastname</label>
            <input
              type="text"
              className="form-control"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>

          <div className="form-group mb-2">
            <label>Firstname</label>
            <input
              type="text"
              className="form-control"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
          </div>

          <div className="row">
            <div className="col-4">
              <label>Identity Ref</label>
              <input
                type="text"
                className="form-control"
                value={identityRef}
                onChange={(e) => setIdentityRef(e.target.value)}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-4">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                value={username}
                placeholder="Customers"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button className="btn btn-primary m-4" onClick={save}>
              Save
            </button>
          </div>
        </form>
      )}
      <CustomerList
        customers={customers}
        editCustomer={editCustomer}
        deleteCustomer={deleteCustomer}
      />
    </div>
  );
};

export default CustomerComponent;
