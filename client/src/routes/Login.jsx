const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-10">
      <h1 className="text-4xl">Login</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
