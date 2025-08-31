import { Link, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Agence from "./Pages/Agence";
import Projets from "./Pages/Projects";

const App = () => {
  return (
    <div className="bg-black text-white w-screen font-[gilroy] h-screen">
      {/* <Link to="/">Home</Link>
      <Link to="/agence">Agence</Link>
      <Link to="/projects">Projects</Link> */}
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
