import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import EventCard from "./components/EventCard";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/events" element={<EventCard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
