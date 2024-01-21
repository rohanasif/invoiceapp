import {
  useCreateOrderMutation,
  useGetCustomersQuery,
} from "../slice/apiSlice";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LogoutBtn from "../components/LogoutBtn";
import NewCustomerModal from "../components/NewCustomerModal";
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

  const [newCustomerModal, setNewCustomerModal] = useState(false);

  const { data } = useGetCustomersQuery();

  const [createOrder, createOrderResponse] = useCreateOrderMutation();

  const handleInvoiceSave = () => {
    console.log(invoice);
  };

  const openModal = () => {
    setNewCustomerModal(true);
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
                <option key={i} value={customer.name}>
                  {customer.name}
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
        <NewCustomerModal setNewCustomerModal={setNewCustomerModal} />
      ) : null}
    </div>
  );
};
export default CreateInvoice;
