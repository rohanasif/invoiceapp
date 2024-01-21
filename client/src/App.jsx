import { Routes, Route } from "react-router-dom";
import Login from "./routes/Login";
import Signup from "./routes/Signup";
import Dashboard from "./routes/Dashboard";
import CreateInvoice from "./routes/CreateInvoice";
const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Dashboard />} />
      <Route path="/create" element={<CreateInvoice />} />
    </Routes>
  );
};

export default App;
