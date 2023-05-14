import React from "react";
import { useSelector } from "react-redux";
import Cart from "./Cart";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Addtocart = () => {
  const {cardItems,totalAmount, quantity} = useSelector((state) => state.card);

  if (cardItems.length === 0) {
    return (
      <motion.div layout className=" flex justify-center items-center w-full mt-20">
        <div className=" border p-10  rounded shadow ">
          <div className=" text-xl md:text-3xl">Your Cart is Empty</div>
          <Link to={"/"}>
            <button className=" mx-auto block mt-5 text-white bg-blue-800 hover:bg-blue-600 duration-300 rounded border p-3">
              Fill Your Cart Now
            </button>
          </Link>
        </div>
      </motion.div>
    );
  }
  return (
    <div>
      <div>
        {cardItems?.map((item) => {
          {
            return <Cart key={item.id} {...item} />;
          }
        })}
      </div>

      <hr className=" w-[70%]  mx-auto my-3" />
      <div className=" mx-auto md:my-5 ">
        <div className=" flex items-center justify-between border rounded shadow p-5">
          <h1 className=" md:text-xl font-bold">Total</h1>
          <p className=" md:text-xl font-bold">{totalAmount.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default Addtocart;
