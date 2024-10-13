import { BrowserRouter, Routes , Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/Home";


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      {/* <div className="pt-24"></div> */}
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
