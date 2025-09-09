import { Link, Route, Routes } from "react-router-dom";
import FullScreenNav from "./Navigation/FullScreenNav";
import Home from "./Pages/Home";
import Projets from "./Pages/Projets";
import Agence from "./Pages/Agence";
import Navbar from "./Navigation/Navbar";
import Blogue from "./Pages/Blogue";
import Contact from "./Pages/Contact";
const App = () => {
  return (
    <div>
      <div className="bg-white select-none text-white w-screen font-[font-1] h-screen">
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
          <Route path="/contact" element={<Contact/>}>
            Contact</Route>
          <Route path="/blogue" element={<Blogue/>}>
            Blogue
          </Route> 
        </Routes>
      </div>
    </div>
  );
};

export default App;
