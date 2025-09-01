import { Link, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Agence from "./Pages/Agence";
import Projets from "./Pages/Projects";
import Navbar from "./Navigation/Navbar";
import FullScreenNav from "./Navigation/FullScreenNav";

const App = () => {
  return (
    <div className="text-white w-screen font-[font-1] h-screen">
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
          Projects
        </Route>
      </Routes>
    </div>
  );
};

export default App;
