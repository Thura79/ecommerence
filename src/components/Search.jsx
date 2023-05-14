import React from "react";
import { useLocation } from "react-router-dom";
import SingleProduct from "./SingleProduct";
import { AnimatePresence, motion } from "framer-motion";

const Search = () => {
  const location = useLocation();

  const products = location.state.filterpd;
  if (products.length === 0) {
    return (
      <motion.div layout className=" flex items-center justify-center mt-28">
        <h1 className=" text-xl md:text-3xl">There is no Result...</h1>
      </motion.div>
    );
  }
  return (
      <motion.div
        layout
        // initial={{ opacity: 0.9, scale: 1 }}
        // exit={{ opacity: 1, scale: 1 }}
        // transition={{ duration: 1 }}
        className=" flex justify-around items-center flex-wrap gap-2 md:gap-5"
      >
        {products?.map((pd) => (
          <SingleProduct key={pd.id} {...pd} />
        ))}
      </motion.div>
  );
};

export default Search;
