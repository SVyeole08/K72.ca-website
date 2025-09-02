import { Link, Route, Routes } from "react-router-dom";
import FullScreenNav from "./Navigation/FullScreenNav";

const App = () => {
  return (
    <div className="overflow-hidden">
      <div className="text-white w-screen font-[font-1] h-screen">
        {/* <Navbar /> */}
        <FullScreenNav />
        {/* <Routes>
        <Route path="/" element={<Home />}>
          Home
        </Route>
        <Route path="/agence" element={<Agence />}>
          Agence
        </Route>
        <Route path="/projets" element={<Projets />}>
          Projects
        </Route>
      </Routes> */}
      </div>
    </div>
  );
};

export default App;
