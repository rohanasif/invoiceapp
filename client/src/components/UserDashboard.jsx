const UserDashboard = ({handleLogout}) => {
  return (
    <>
      <div className="flex justify-between mx-4 mt-2 flex-wrap">
        <h1 className="text-4xl">Dashboard</h1>
        <button onClick={handleLogout} className="p-2 bg-green-700 text-white">
          Logout
        </button>
      </div>
      <div className="flex flex-col items-center justify-center h-screen gap-10">
        <p>Content</p>
      </div>
    </>
  );
};
export default UserDashboard;
