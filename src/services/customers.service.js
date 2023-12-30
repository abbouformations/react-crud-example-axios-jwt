import api from "./axiosConfig";

const getCustomers = () => {
  return api.get("/agent_guichet/all");
};

const createCustomer = (identityRef, firstname, lastname, username) => {
  return api.post("/agent_guichet/create", {
    identityRef,
    firstname,
    lastname,
    username,
  });
};

const updateCustomer = (identityRef, firstname, lastname, username) => {
  return api.put("/agent_guichet/update/" + identityRef, {
    firstname,
    lastname,
    username,
  });
};

const deleteCustomer = (identityRef) => {
  return api.delete("/agent_guichet/delete/" + identityRef);
};
const CustomersService = {
  getCustomers,
  createCustomer,
  updateCustomer,
  deleteCustomer,
};

export default CustomersService;
