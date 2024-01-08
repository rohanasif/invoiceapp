import { Routes, Route } from "react-router-dom";
import Login from "./routes/Login";
import Signup from "./routes/Signup";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default App;
