
import { BrowserRouter, Routes , Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/Home";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";


function App() {
  return (
    <BrowserRouter>
      <NavBar />

      {/* <div className="pt-24"></div> */}
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/events" element={<Events />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
