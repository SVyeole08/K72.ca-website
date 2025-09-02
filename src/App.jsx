import { Link, Route, Routes } from "react-router-dom";
import FullScreenNav from "./Navigation/FullScreenNav";
import Home from "./Pages/Home";
import Projets from "./Pages/Projects";
import Agence from "./Pages/Agence";
import Navbar from "./Navigation/Navbar";
const App = () => {
  return (
    <div className="overflow-hidden">
      <div className="text-white w-screen font-[font-1] h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}>
            Home
          </Route>
          <Route path="/agence" element={<Agence />}>
            Agence
          </Route>
          <Route path="/projets" element={<Projets />}>
            Projects
          </Route>
          <Route path="/menu" element={<FullScreenNav />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
