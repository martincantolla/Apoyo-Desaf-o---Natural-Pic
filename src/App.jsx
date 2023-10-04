import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import PicsProvider, { PicsContext } from "./context/PicsContext";
import Favorites from "./views/Favorites";
import Home from "./views/Home";

const App = () => {
  return (
    <div>
      <PicsProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favorites />} />
        </Routes>
      </PicsProvider>
    </div>
  );
};
export default App;
