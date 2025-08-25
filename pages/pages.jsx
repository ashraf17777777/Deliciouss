import Home from "./home.jsx";
import { Route, Routes, useLocation } from "react-router-dom";
import Cuisine from "./cuisine.jsx";
import Searched from "./Searched.jsx";
import Recipe from "./Recipe.jsx";
import { AnimatePresence } from "framer-motion";

function Pages() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/cuisine/:type" element={<Cuisine />} />
          <Route path="/searched/:search" element={<Searched />} />
          <Route path="/recipe/:id" element={<Recipe />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default Pages;
