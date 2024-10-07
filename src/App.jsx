import { BrowserRouter, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes></Routes>
    </BrowserRouter>
  );
}

export default App;
