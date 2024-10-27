import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/Home";
import TechEvents from "./pages/TechEvents";
import Gallery from "./pages/Gallery";
import Events from "./pages/Events";
import Footer from "./components/Footer";
import ViewEvent from "./pages/ViewEvent";
import NonTechEvents from "./pages/NonTechEvents";
import Register from "./pages/Register";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import UnderDev from "./components/UnderDev";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/events" element={<Events />} />
        <Route path="/techevents" element={<TechEvents />} />
        <Route path="/techevents/viewevent/:event" element={<ViewEvent />} />
        <Route path="/nontechevents" element={<NonTechEvents />} />
        <Route path="/nontechevents/viewevent/:event" element={<ViewEvent />} />
        <Route
          path="/techevents/viewevent/:event/register"
          element={<Register />}
        />
        <Route
          path="/nontechevents/viewevent/:event/register"
          element={<Register />}
        />
        <Route path="/gallery" element={<Gallery />} />
        {/* <Route path="/sponsors" element={<Sponsors />} /> */}
        <Route path="/underdev" element={<UnderDev />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
