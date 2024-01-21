import { useCreateOrderMutation } from "../slice/apiSlice";
import { useState, useEffect } from "react";
import LogoutBtn from "../components/LogoutBtn";
const CreateInvoice = () => {
  const [message, setMessage] = useState("");
  const [type, setType] = useState("Invoice");
  const [invoice, setInvoice] = useState({
    number: "",
    customer: "",
    date: new Date(),
    dueDate: new Date(),
    amount: 0,
    items: [],
    taxRate: 0,
    note: "",
  });
  const [createOrder, createOrderResponse] = useCreateOrderMutation();

  useEffect(() => {
    if (createOrderResponse?.data?.message) {
      const responseMessage = createOrderResponse.data.message;
      setMessage(responseMessage);
    }
  }, [createOrderResponse]);

  return (
    <div className="h-screen">
      <div className="flex justify-between mx-4 mt-2 flex-wrap">
        <h1 className="text-4xl">Create</h1>
        <LogoutBtn />
      </div>
      <div className="flex flex-col mx-4 justify-center gap-10">
        <div className="flex items-center gap-2">
          <label htmlFor="type" className="text-gray-500">
            Select type
          </label>
          <select
            name="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="p-4 bg-slate-200 focus:outline-none rounded-xl"
            required
            id="type"
          >
            <option value="Invoice">Invoice</option>
            <option value="Receipt">Receipt</option>
          </select>
        </div>
        {message === "Invoice created successfully" ? (
          <p className="text-green-700">{message}</p>
        ) : (
          <p className="text-red-700">{message}</p>
        )}
      </div>
    </div>
  );
};
export default CreateInvoice;
