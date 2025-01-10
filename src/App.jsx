import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
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
import ContactUs from "./pages/ContactUs";
import Workshops from "./pages/Workshops";
import JSConfetti from 'js-confetti'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa"; 


function App() {

  const needPassKey = localStorage.getItem('needPassKey');



  const PassKeyElement = () => {
    const jsConfetti = new JSConfetti();
    // jsConfetti.addConfetti({
    //   confettiColors: ['#ff0000', '#00ff00', '#0000ff'],
    //   confettiRadius: 3,
    //   confettiNumber: 100,
    //   confettiSpeed: 1,
    // });
    
    // var viewpass = false;
    const [viewpass, setViewPass] = React.useState(false);
    const [pass,setPass] = React.useState('');
    

    return (
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <h1 className="text-7xl text-white font-jersey "
        >Enter Pass Key</h1>
        <form className="flex flex-col justify-center items-center">
          <button className="bg-black p-2 text-white mt-2 rounded-lg border-2 border-white " onClick={(e) => {
            e.preventDefault();
            setViewPass(!viewpass);


          }}>
            {/* {viewpass  && <FaEyeSlash />}
            {!viewpass  && <FaEye />} */}
            { viewpass ? <FaEyeSlash />: <FaEye />  }
          </button>
          <input
            type={viewpass ? 'text' : 'password'}
            className="rounded-lg p-2 mt-2 text-3xl"
            placeholder="Pass Key"
            onChange={
              (e) => {
                setPass(e.target.value);
              }
            }
          />
          <button
            type="submit"
            className="bg-black p-2 text-white mt-2 rounded-lg border-2 border-white text-3xl"
            onClick={(e) => {
              e.preventDefault();
              if ("Cyber_Carnival'25" === pass) {
                localStorage.setItem('needPassKey', 'false');

                jsConfetti.addConfetti({
                  confettiColors: ['#00FFFF', '#00FFDD', '#00DDFF'],
                  confettiRadius: 5,
                  confettiNumber: 500,
                  confettiSpeed: 1,
                }).then(() => {
                  window.location.reload();
                });
              } else {
                alert('Invalid Pass Key');
              }
            }
            }
          >
            Submit
          </button>
        </form>
      </div>
    );
  };

  if (needPassKey === 'true') {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PassKeyElement />} />
        </Routes>
      </BrowserRouter>
    );
  }



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
        <Route path="/workshops" element={<Workshops />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/nontechevents/viewevent/:event" element={<ViewEvent />} />
        <Route path="/workshops/viewevent/:event" element={<ViewEvent />} />
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
