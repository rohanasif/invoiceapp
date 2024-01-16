import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { login, getLoggedInUser } from "../slice/usersSlice";
import { useLogInMutation } from "../slice/apiSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const [logIn, loginResponse] = useLogInMutation();
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(user));
    logIn(user);
    alert(loginResponse?.data?.message);
  };
  const checkLogin = () => {
    const loggedUser = dispatch(getLoggedInUser());
    if (loggedUser.payload) {
      navigate("/dashboard");
    }
  };
  useEffect(() => {
    checkLogin();
  }, []);
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
