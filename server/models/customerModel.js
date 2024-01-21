import mongoose from "mongoose";

const customerSchema = mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  phone: { type: String, required: true, trim: true },
  address: { type: String, required: true, trim: true },
});

const customerModel = mongoose.model("customer", customerSchema);

export default customerModel;
