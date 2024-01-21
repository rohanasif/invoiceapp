import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const token = JSON.parse(localStorage.getItem("token"));
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  const handleLogin = () => {
    navigate("/login");
  };
  if (token) {
    return (
      <div className="flex flex-col items-center justify-center h-screen gap-10">
        <h1 className="text-4xl">Dashboard</h1>
        <button onClick={handleLogout} className="p-2 bg-green-700 text-white">
          Logout
        </button>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col items-center justify-center h-screen gap-10">
        <h1 className="text-4xl">Dashboard</h1>
        <button onClick={handleLogin} className="p-2 bg-green-700 text-white">
          Login
        </button>
      </div>
    );
  }
};
export default Dashboard;
