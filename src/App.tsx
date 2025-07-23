import { Route, Routes } from "react-router";
import { Login } from "./pages";
import DashBoardRoutes from "./routes/DashBoardRoutes";

function App() {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="/dashboard/*" element={<DashBoardRoutes />} />
    </Routes>
  );
}

export default App;
