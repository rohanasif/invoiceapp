import {
  useCreateCustomerMutation,
  useCreateOrderMutation,
} from "../slice/apiSlice";
const CreateInvoice = () => {
  const [createCustomer, createCustomerResponse] = useCreateCustomerMutation();
  const [createOrder, createOrderResponse] = useCreateOrderMutation();
  return <div></div>;
};
export default CreateInvoice;
