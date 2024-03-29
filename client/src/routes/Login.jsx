import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLogInMutation } from "../slice/apiSlice";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [logIn, loginResponse] = useLogInMutation();
  const navigate = useNavigate();
  const token = loginResponse?.data?.token;
  useEffect(() => {
    if (loginResponse?.data?.message) {
      const responseMessage = loginResponse.data.message;
      setMessage(responseMessage);
      if (responseMessage === "User logged in") {
        localStorage.setItem("token", JSON.stringify(token));
        alert(responseMessage);
        navigate("/");
      }
    }
  }, [loginResponse, navigate]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    logIn(user);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-10">
      <h1 className="text-4xl">Login</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-5"
      >
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
        <button type="submit" className="p-2 bg-green-700 text-white">
          Login
        </button>
      </form>
      {message === "User logged in" ? null : (
        <p className="text-red-700">{message}</p>
      )}
      <p>
        Don&apos;t have account?{" "}
        <Link to={"/signup"} className="p-2 bg-slate-300 text-slate-700">
          Sign up!
        </Link>
      </p>
    </div>
  );
};

export default Login;
