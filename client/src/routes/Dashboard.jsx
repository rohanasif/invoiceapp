import { useNavigate } from "react-router-dom";
import CommonDashboard from "../components/CommonDashboard";
import UserDashboard from "../components/UserDashboard";

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
  return token ? (
    <UserDashboard handleLogout={handleLogout} />
  ) : (
    <CommonDashboard handleLogin={handleLogin} />
  );
};

export default Dashboard;
