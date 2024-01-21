const CommonDashboard = ({ handleLogin }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-10">
      <h1 className="text-4xl">Dashboard</h1>
      <button onClick={handleLogin} className="p-2 bg-green-700 text-white">
        Login
      </button>
    </div>
  );
};
export default CommonDashboard;
