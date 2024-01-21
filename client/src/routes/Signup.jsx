import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSignUpMutation } from "../slice/apiSlice";

const Signup = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    repeatPassword: "",
  });
  const [message, setMessage] = useState("");
  const [signUp, signUpResponse] = useSignUpMutation();

  useEffect(() => {
    if (signUpResponse?.data?.message) {
      setMessage(signUpResponse.data.message);
    }
  }, [signUpResponse]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signUp(user);
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-10">
      <h1 className="text-4xl">Signup</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-5"
      >
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          value={user.firstName}
          onChange={handleChange}
          required
          className="p-4 bg-slate-300 focus:outline-none"
        />
        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={user.lastName}
          onChange={handleChange}
          required
          className="p-4 bg-slate-300 focus:outline-none"
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={user.email}
          onChange={handleChange}
          required
          className="p-4 bg-slate-300 focus:outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={user.password}
          onChange={handleChange}
          required
          className="p-4 bg-slate-300 focus:outline-none"
        />
        <input
          type="password"
          placeholder="Repeat Password"
          name="repeatPassword"
          value={user.repeatPassword}
          onChange={handleChange}
          required
          className="p-4 bg-slate-300 focus:outline-none"
        />
        <button type="submit" className="p-2 bg-green-700 text-white">
          Signup
        </button>
      </form>
      {message === "User created successfully" ? (
        <p className="text-green-700">{message}</p>
      ) : (
        <p className="text-red-700">{message}</p>
      )}
      <p>
        Already registered?{" "}
        <Link to={"/login"} className="p-2 bg-slate-300 text-slate-700">
          Log in!
        </Link>
      </p>
    </div>
  );
};

export default Signup;
