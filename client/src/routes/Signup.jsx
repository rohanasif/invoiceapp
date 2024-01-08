import { Link } from "react-router-dom";

const Signup = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-10">
      <h1 className="text-4xl">Signup</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Repeat Password" />
        <button type="submit">Login</button>
      </form>
      <p>
        Already registered? <Link to={"/"}>Log in!</Link>
      </p>
    </div>
  );
};

export default Signup;
