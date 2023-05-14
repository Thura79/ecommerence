import React from "react";
import { Route, Routes } from "react-router-dom";
import Products from "./components/Products";
import Nav from "./components/Nav";
import Addtocart from "./components/Addtocart";
import Search from "./components/Search";
import Detail from "./components/Detail";
import { AnimatePresence, motion } from "framer-motion";
import RouteGuard from "./components/RouteGuard";

const App = () => {
  return (
    <AnimatePresence>

    <motion.div layout className=" container mx-auto p-2 md:p-5">
      <Nav />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/addtocart" element={<Addtocart />} />
        <Route
          path="/search"
          element={
            <RouteGuard>
              <Search />
            </RouteGuard>
          }
        />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </motion.div>
    </AnimatePresence>

  );
};

export default App;
