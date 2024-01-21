import {
  useCreateOrderMutation,
  useGetCustomersQuery,
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

  const { data } = useGetCustomersQuery();
  const [createOrder, createOrderResponse] = useCreateOrderMutation();

  const handleSave = () => {
    console.log(invoice);
    console.log(data);
  };

  useEffect(() => {
    if (createOrderResponse?.data?.message) {
      const responseMessage = createOrderResponse.data.message;
      setMessage(responseMessage);
    }
  }, [createOrderResponse]);

  return (
    <div className="h-screen flex-col">
      <div className="flex justify-between mx-4 my-2 flex-wrap">
        <h1 className="text-4xl">Create</h1>
        <LogoutBtn />
      </div>
      <div className="flex flex-wrap">
        <div className="flex flex-col mx-4 justify-center gap-10">
          <p className="text-sm text-gray-500">BILL TO</p>
          <select
            name="customer"
            id="customer"
            className="p-4 bg-slate-200 focus:outline-none rounded-xl"
          >
            {data?.length === 0 ? (
              <option>No options</option>
            ) : (
              data?.map((customer, i) => (
                <option key={i} value={customer}>
                  {customer}
                </option>
              ))
            )}
          </select>
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
      <div className="mx-4 flex items-center gap-4">
        <button
          onClick={() => navigate("/")}
          className="p-2 bg-blue-700 text-white"
        >
          Back
        </button>
        <button onClick={handleSave} className="p-2 bg-green-700 text-white">
          Save and Continue
        </button>
      </div>
      {message === "Invoice created successfully" ? (
        <p className="text-green-700">{message}</p>
      ) : (
        <p className="text-red-700">{message}</p>
      )}
    </div>
  );
};
export default CreateInvoice;
