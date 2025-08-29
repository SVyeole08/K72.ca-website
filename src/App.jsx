import { Link, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Agence from "./Pages/Agence";

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
        <Route path="/projects" element={<Projects />}>
          Projects
        </Route>
      </Routes>
    </div>
  );
};

export default App;
