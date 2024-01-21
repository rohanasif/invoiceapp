import CommonDashboard from "../components/CommonDashboard";
import UserDashboard from "../components/UserDashboard";

const Dashboard = () => {
  const token = JSON.parse(localStorage.getItem("token"));

  return token ? <UserDashboard /> : <CommonDashboard />;
};

export default Dashboard;
