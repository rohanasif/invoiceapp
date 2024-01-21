import customerModel from "../models/customerModel.js";

class customerController {
  static getCustomers = async (req, res) => {
    const customers = await customerModel.find();
    res.send(customers);
  };
  static addCustomer = async (req, res) => {
    const { name, email, phone, address } = req.body;
    const customer = await customerModel.findOne({ email: email });
    if (customer) {
      res.send({
        success: false,
        message: "Customer already exists",
      });
    } else {
      const newCustomer = new customerModel({
        name: name,
        email: email,
        phone: phone,
        address: address,
      });
      await newCustomer.save();
      res.send({
        success: true,
        message: "Customer added successfully",
      });
    }
  };
}

export default customerController;
