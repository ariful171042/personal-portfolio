import { Route, Routes } from "react-router-dom";
import { useSmoothScrooll } from "./hook/useSmoothScrooll";
import Home from "./components/Home";
import Navber from "./components/Navber";
import Socials from "./components/Socials";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import { useRef } from "react";
import { useCostomCursor } from "./hook/useCostomCursor";

const App = () => {
  const innerCursorRef = useRef(null);
  const outerCursorRef = useRef(null);

  useSmoothScrooll();
  useCostomCursor(innerCursorRef, outerCursorRef);
  return (
    <div className="app">
      <div className="noise"></div>
      <CustomCursor
        innerCursorRef={innerCursorRef}
        outerCursorRef={outerCursorRef}
      />
      <Navber />
      <Socials />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Navber footerNav />
      <Footer />
    </div>
  );
};

export default App;
