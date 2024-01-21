const LogoutBtn = ({ handleLogout }) => {
  return (
    <button onClick={handleLogout} className="p-2 bg-green-700 text-white">
      Logout
    </button>
  );
};
export default LogoutBtn;
