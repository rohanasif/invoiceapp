import {
  useCreateOrderMutation,
  useGetCustomersQuery,
  useCreateCustomerMutation,
} from "../slice/apiSlice";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LogoutBtn from "../components/LogoutBtn";
const CreateInvoice = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [invoice, setInvoice] = useState({
    type: "Invoice",
    number: "",
    customer: "",
    date: new Date(),
    dueDate: new Date(),
    amount: 0,
    items: [],
    taxRate: 0,
    note: "",
  });
  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const { data } = useGetCustomersQuery();
  const [createOrder, createOrderResponse] = useCreateOrderMutation();
  const [createCustomer, createCustomerResponse] = useCreateCustomerMutation();
  const [newCustomerModal, setNewCustomerModal] = useState(false);

  const handleInvoiceSave = () => {
    console.log(invoice);
    console.log(data);
  };

  const openModal = () => {
    setNewCustomerModal(true);
  };

  const closeModal = () => {
    setNewCustomerModal(false);
  };

  const addCustomer = (e) => {
    e.preventDefault();
    createCustomer({});
  };

  useEffect(() => {
    if (createOrderResponse?.data?.message) {
      const responseMessage = createOrderResponse.data.message;
      setMessage(responseMessage);
    }
  }, [createOrderResponse]);

  return (
    <div className="h-screen flex flex-col relative">
      <div className="flex justify-between mx-4 my-2 flex-wrap">
        <h1 className="text-4xl">Create</h1>
        <LogoutBtn />
      </div>
      <div className="flex flex-wrap justify-between">
        <div className="flex flex-col mx-4 justify-center gap-4">
          <p className="text-sm text-gray-500">BILL TO</p>
          <select
            name="customer"
            id="customer"
            className="p-4 bg-slate-200 focus:outline-none rounded-xl"
          >
            {!data || data?.length === 0 ? (
              <option disabled>No options</option>
            ) : (
              data?.map((customer, i) => (
                <option key={i} value={customer}>
                  {customer}
                </option>
              ))
            )}
          </select>
          <button
            className="px-4 py-2 border-2 border-gray-400 rounded-3xl text-xs flex items-center"
            onClick={openModal}
          >
            <span className="rounded-full border-2 border-gray-400 h-4 w-4 flex items-center justify-center">
              +
            </span>
            New Customer
          </button>
        </div>

        <div className="flex flex-col mx-4 justify-center gap-10">
          <div className="flex items-center gap-2">
            <label htmlFor="type" className="text-gray-500">
              Select type
            </label>
            <select
              name="type"
              value={invoice.type}
              onChange={(e) => {
                setInvoice({ ...invoice, type: e.target.value });
                console.log(invoice.type);
              }}
              className="p-4 bg-slate-200 focus:outline-none rounded-xl"
              required
              id="type"
            >
              <option value="Invoice">Invoice</option>
              <option value="Receipt">Receipt</option>
              <option value="Estimate">Estimate</option>
              <option value="Bill">Bill</option>
              <option value="Quotation">Quotation</option>
            </select>
          </div>
        </div>
      </div>
      <div className="mx-4 my-4 flex items-center gap-4">
        <button
          onClick={() => navigate("/")}
          className="p-2 bg-blue-700 text-white"
        >
          Back
        </button>
        <button
          onClick={handleInvoiceSave}
          className="p-2 bg-green-700 text-white"
        >
          Save and Continue
        </button>
      </div>
      {message === "Invoice created successfully" ? (
        <p className="text-green-700">{message}</p>
      ) : (
        <p className="text-red-700">{message}</p>
      )}
      {newCustomerModal ? (
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
                <div>
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
                <div>
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
                <div>
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
                <div>
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
                <div>
                  <button type="submit">Save Customer</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
export default CreateInvoice;
