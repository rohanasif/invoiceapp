import { useState } from "react";
import { useCreateCustomerMutation } from "../slice/apiSlice";

const NewCustomerModal = ({ setNewCustomerModal }) => {
  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [createCustomer, createCustomerResponse] = useCreateCustomerMutation();

  const closeModal = () => {
    setNewCustomerModal(false);
  };

  const addCustomer = (e) => {
    e.preventDefault();
    createCustomer(customer);
  };
  return (
    <div className="absolute h-screen w-full">
      <div className="flex justify-center items-center h-screen w-full bg-black opacity-80 absolute left-0 top-0 z-10">
        <button
          onClick={closeModal}
          className="text-white absolute right-1 top-1 text-3xl"
        >
          X
        </button>
        <div className="bg-white h-1/2 w-1/2 rounded-2xl p-4 flex flex-col">
          <h2 className="text-3xl">New Customer</h2>
          <form className="flex flex-wrap" onSubmit={addCustomer}>
            <div className="flex">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={customer.name}
                onChange={(e) =>
                  setCustomer({ ...customer, name: e.target.value })
                }
              />
            </div>
            <div className="flex">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={customer.email}
                onChange={(e) =>
                  setCustomer({ ...customer, email: e.target.value })
                }
              />
            </div>
            <div className="flex">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                name="phone"
                id="phone"
                value={customer.phone}
                onChange={(e) =>
                  setCustomer({ ...customer, phone: e.target.value })
                }
              />
            </div>
            <div className="flex">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                name="address"
                id="address"
                value={customer.address}
                onChange={(e) =>
                  setCustomer({ ...customer, address: e.target.value })
                }
              />
            </div>
            <div className="flex">
              <button type="submit">Save Customer</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewCustomerModal;
