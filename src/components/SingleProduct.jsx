import React from "react";
import { useDispatch } from "react-redux";
import { addTocart } from "../feature/services/cardSlice";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const SingleProduct = (props) => {
  const { title, image, price, id } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <motion.div layout transition={{duration: 1}} className=" flex flex-col gap-1 md:gap-2 border p-2 md:p-5 rounded shadow w-36 md:w-56 md:h-[300px] group">
      <img
        src={image}
        className=" group-hover:scale-110 duration-300 w-20 h-20 md:w-36 md:h-36 object-contain block mx-auto"
        alt=""
      />
      <h1 className=" text-sm md:text-base truncate">{title}</h1>
      <p className=" text-sm md:text-base">$ {price}</p>
      <div className=" flex flex-col md:flex-row gap-1 md:gap-2 mt-auto">
        <button
          onClick={() => dispatch(addTocart(props))}
          className=" text-sm md:text-base bg-blue-800 hover:bg-blue-600 px-2 py-1 md:px-3 md:py-2 text-white rounded duration-300"
        >
          Add to cart
        </button>
        {/* <Lin to={`/detail/${id}`}> */}
          <button onClick={() => navigate(`/detail/${id}`)} className=" text-sm md:text-base bg-blue-800 hover:bg-blue-600 px-2 py-1 md:px-3 md:py-2 text-white rounded duration-300">
            Detail
          </button>
      </div>
    </motion.div>
  );
};

export default SingleProduct;
