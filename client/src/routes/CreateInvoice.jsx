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
    number: 0,
    customer: "",
    date: new Date(),
    dueDate: new Date(),
    amount: 0,
    items: [],
    taxRate: 0,
    note: "",
    status: "Unpaid",
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
      <div className="flex flex-wrap justify-between mt-8">
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
        <div className="flex flex-col mx-4 justify-center gap-5 items-end">
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
          <div className="flex items-center gap-2">
            <label htmlFor="invoicenumber" className="text-gray-500">
              Invoice #:
            </label>
            <input
              type="text"
              name="invoicenumber"
              id="invoicenumber"
              value={invoice.number}
              className="focus:outline-none border-b-2 border-gray-400 px-4 py-2 bg-slate-200 text-center max-w-[100px]"
              onChange={(e) =>
                setInvoice({ ...invoice, number: e.target.value })
              }
              required
              placeholder="Invoice Number"
            />
          </div>
          <div className="flex flex-col items-end">
            <p className="text-sm text-gray-500">STATUS</p>
            <h4
              className={
                invoice.status === "Unpaid"
                  ? "text-red-700 font-bold text-2xl"
                  : "text-green-700 font-bold text-2xl"
              }
            >
              {invoice.status}
            </h4>
          </div>
          <div className="flex flex-col items-end">
            <p className="text-sm text-gray-500">DATE</p>
            <h4 className="text-lg">{`${invoice.date.getDate()}/${
              invoice.date.getMonth() + 1
            }/${invoice.date.getDate()}`}</h4>
          </div>
          <div className="flex flex-col items-end">
            <p className="text-sm text-gray-500">DUE DATE</p>
            <h4 className="text-lg">{`${invoice.dueDate.getDate()}/${
              invoice.dueDate.getMonth() + 1
            }/${invoice.dueDate.getDate()}`}</h4>
          </div>
          <div>
            <p className="text-sm text-gray-500">AMOUNT</p>
            <h4 className="text-lg">{invoice.amount}</h4>
          </div>
        </div>
      </div>
      <div className="flex mx-4">
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Item
                </th>
                <th scope="col" className="px-6 py-3">
                  Qty
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Disc(%)
                </th>
                <th scope="col" className="relative px-6 py-3">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <input
                    type="text"
                    placeholder="Item name or description"
                    className=""
                  />
                </th>
                <td className="px-6 py-4">
                  <input type="text" placeholder="0" />
                </td>
                <td className="px-6 py-4">
                  <input type="text" placeholder="0" />
                </td>
                <td className="px-6 py-4">
                  <input type="text" placeholder="0" />
                </td>
                <td className="px-6 py-4">
                  <input type="text" placeholder="0" />
                </td>
              </tr>
            </tbody>
          </table>
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
