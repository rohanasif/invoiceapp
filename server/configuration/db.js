import mongoose from "mongoose";

const createConnection = async(req, res) => {
  try {
    const connection =await mongoose.connect(process.env.DB_URL);
    console.log("connected to DB");
  } catch (error) {
    console.error(error);
  }
};

export default createConnection;
