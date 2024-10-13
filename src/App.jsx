
import { BrowserRouter, Routes , Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/Home";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import Sponsors from "./pages/Sponsors";


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/events" element={<Events />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/sponsors" element={<Sponsors />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
