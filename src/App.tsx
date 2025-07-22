import { Route, Routes } from "react-router";
import { DashBoard, Login } from "./pages";

function App() {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="/dashboard" element={<DashBoard />} />
    </Routes>
  )
}

export default App
