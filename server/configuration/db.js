import mongoose from "mongoose";

const createConnection = (req, res) => {
  try {
    const connection = mongoose.connect(process.env.DB_URL, () => {
      console.log("Connected to DB");
    });
  } catch (error) {
    console.error(error);
  }
};

export default createConnection;
