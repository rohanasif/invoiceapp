import userModel from "../models/usersModel";
import { Jwt } from "jsonwebtoken";

const users = async (req, res, next) => {
  let token;
  const { authorization } = req.headers;
  if (authorization && authorization.startsWith("Bearer")) {
    try {
      token = authorization.split(" ")[1];
      const { userID } = Jwt.verify(token, process.env.JWT_KEY);
      req.user = await userModel.findById(userID).select("-password");
    } catch (error) {
      console.log(error);
      req.send({
        success: false,
        message: "User unautherized",
      });
    }
  }
  if (!token) {
    res.send({
      success: false,
      message: "Token is required",
    });
  }
  next();
};
export default users;
