import LoginBtn from "./LoginBtn";

const CommonDashboard = ({ handleLogin }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-10">
      <h1 className="text-4xl">Dashboard</h1>
      <LoginBtn handleLogin={handleLogin} />
    </div>
  );
};
export default CommonDashboard;
