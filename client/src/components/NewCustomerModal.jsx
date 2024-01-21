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
    closeModal();
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
        <div className="bg-white h-2/3 w-1/2 rounded-2xl p-4 flex flex-col">
          <h2 className="text-3xl">New Customer</h2>
          <form
            className="flex flex-col flex-wrap items-center"
            onSubmit={addCustomer}
          >
            <div className="flex flex-col">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={customer.name}
                className="focus:outline-none border-2 border-gray-400"
                onChange={(e) =>
                  setCustomer({ ...customer, name: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={customer.email}
                className="focus:outline-none border-2 border-gray-400"
                onChange={(e) =>
                  setCustomer({ ...customer, email: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                name="phone"
                id="phone"
                value={customer.phone}
                className="focus:outline-none border-2 border-gray-400"
                onChange={(e) =>
                  setCustomer({ ...customer, phone: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                name="address"
                id="address"
                value={customer.address}
                className="focus:outline-none border-2 border-gray-400"
                onChange={(e) =>
                  setCustomer({ ...customer, address: e.target.value })
                }
              />
            </div>
            <button
              className="px-4 py-2 bg-green-700 text-white mt-4"
              type="submit"
            >
              Save Customer
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewCustomerModal;
