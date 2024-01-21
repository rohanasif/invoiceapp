const LoginBtn = ({ handleLogin }) => {
  return (
    <button onClick={handleLogin} className="p-2 bg-green-700 text-white">
      Login
    </button>
  );
};
export default LoginBtn;
