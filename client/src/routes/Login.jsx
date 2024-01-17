import { useState } from "react";
import { Link } from "react-router-dom";
import { useLogInMutation } from "../slice/apiSlice";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [logIn, loginResponse] = useLogInMutation();
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    logIn(user);
    console.log(loginResponse);
    //alert(loginResponse?.data?.message);
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
