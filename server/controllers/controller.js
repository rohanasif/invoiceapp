import userModel from "../models/usersModel.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

class userController {
  static signUp = async (req, res) => {
    const { firstName, lastName, email, password, repeatPassword } = req.body;
    const user = await userModel.findOne({ email: email });
    if (user) {
      res.send({
        success: false,
        message: "User already exists",
      });
    } else {
      if (firstName && lastName && email && password && repeatPassword) {
        if (password === repeatPassword) {
          try {
            const salt = await bcryptjs.genSalt(10);
            const hashedPassword = await bcryptjs.hashSync(password, salt);
            const saveUser = userModel({
              firstName: firstName,
              lastName: lastName,
              email: email,
              password: hashedPassword,
            });
            await saveUser.save();
            const userID = await userModel.findOne({
              email: email,
            });
            const token = await jwt.sign(
              { userID: userID._id },
              process.env.JWT_KEY,
              { expiresIn: "10m" }
            );
            res.send({
              success: true,
              message: "User created successfully",
              token: token,
            });
          } catch (error) {
            console.error(error);
            res.send({
              success: false,
              message: "Something went wrong",
            });
          }
        }
      }
    }
  };
  static userLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await userModel.findOne({ email: email });
      if (user !== "null") {
        if (email && password) {
          const ispasswordMatch = await bycrpt.compare(password, user.password);

          if (user.email === email && ispasswordMatch) {
            const token = await jwt.sign(
              { userID: user._id },
              process.env.JWT_KEY,
              { expiresIn: "10m" }
            );
            res.send({
              success: true,
              user: user,
              message: "user logged in",
              token: token,
            });
          } else {
            res.send({
              success: false,
              message: "Your email or password is invalid",
            });
          }
        } else {
          res.send({
            success: false,
            message: "please fill all feilds",
          });
        }
      } else {
        res.send({
          success: "false",
          message: "user not exist",
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  static UserDashBoard = (req, res) => {
    res.send("Dash board a giya");
  };
}

export default userController;
