import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Events from "./pages/Events";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/events" element={<Events />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
