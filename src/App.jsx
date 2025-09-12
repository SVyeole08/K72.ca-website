import { Link, Route, Routes } from "react-router-dom";
import { ReactLenis, useLenis } from "lenis/react";
import FullScreenNav from "./Navigation/FullScreenNav";
import Home from "./Pages/Home";
import Projets from "./Pages/Projets";
import Agence from "./Pages/Agence";
import Navbar from "./Navigation/Navbar";
import Blogue from "./Pages/Blogue";
import Contact from "./Pages/Contact";
import { useEffect } from "react";
import Lenis from "lenis";
const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  const lenis = useLenis((lenis) => {
    // called every scroll
    console.log(lenis);
  });
  return (
    <div>
      <ReactLenis root />
      <div className="bg-white selection:bg-[#D3FD50] selection:text-black text-white w-screen font-[font-1] h-screen">
        <Navbar />
        <FullScreenNav />
        <Routes>
          <Route path="/" element={<Home />}>
            Home
          </Route>
          <Route path="/agence" element={<Agence />}>
            Agence
          </Route>
          <Route path="/projets" element={<Projets />}>
            Projets
          </Route>
          <Route path="/contact" element={<Contact />}>
            Contact
          </Route>
          <Route path="/blogue" element={<Blogue />}>
            Blogue
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
