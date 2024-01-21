import { useNavigate } from "react-router-dom";
const LogoutBtn = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <button onClick={handleLogout} className="p-2 bg-green-700 text-white">
      Logout
    </button>
  );
};
export default LogoutBtn;
