import LogoutBtn from "./LogoutBtn";
import { useNavigate } from "react-router-dom";

const UserDashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen relative">
      <div className="flex justify-between mx-4 mt-2 flex-wrap">
        <h1 className="text-4xl">Dashboard</h1>
        <LogoutBtn />
      </div>
      <div className="flex flex-col items-center justify-center gap-10 relative">
        <h2 className="text-3xl">Data</h2>
      </div>
      <button
        className="absolute right-[1%] bottom-[5%] rounded-full w-[60px] h-[60px] flex justify-center items-center bg-green-700 text-white text-3xl"
        onClick={() => navigate("/create")}
      >
        +
      </button>
    </div>
  );
};
export default UserDashboard;
