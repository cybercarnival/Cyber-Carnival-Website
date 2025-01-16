import { AppProvider } from "./context";
import Event from "./Event";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Login from "./Login";
function Dashboard() {
  return (
    <AppProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/event/:id" element={<Event />} />
      </Routes>
    </AppProvider>
  );
}

export default Dashboard;
