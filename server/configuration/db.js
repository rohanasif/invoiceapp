import mongoose from "mongoose";

const createConnection = (req, res) => {
  try {
    const connection = mongoose.connect(process.env.DB_URL);
    console.log("connected to DB");
  } catch (error) {
    console.error(error);
  }
};

export default createConnection;
