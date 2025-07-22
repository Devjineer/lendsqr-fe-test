import { Route, Routes } from "react-router";
import { Login } from "./pages";

function App() {
  return (
    <Routes>
      <Route index element={<Login />} />
    </Routes>
  )
}

export default App
