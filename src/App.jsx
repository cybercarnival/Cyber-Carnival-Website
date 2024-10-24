import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/Home";
import TechEvents from "./pages/TechEvents";
import Gallery from "./pages/Gallery";
import Sponsors from "./pages/Sponsors";
import Events from "./pages/Events";
import Footer from "./components/Footer";
import ViewEvent from "./pages/ViewEvent";
import NonTechEvents from "./pages/NonTechEvents";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/events" element={<Events />} />
        <Route path="/techevents" element={<TechEvents />} />
        <Route path="/techevents/viewevent/:event" element={<ViewEvent />} />
        <Route path="/nontechevents" element={<NonTechEvents />} />
        <Route path="/nontechevents/viewevent/:event" element={<ViewEvent />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/sponsors" element={<Sponsors />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
