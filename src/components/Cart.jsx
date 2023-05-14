import React from 'react'
import {IoIosArrowUp,IoIosArrowDown} from 'react-icons/io'
import { useDispatch } from 'react-redux';
import { decresequantity, incresequantity, removeFromcart } from '../feature/services/cardSlice';
import { motion } from 'framer-motion';

const Cart = (props) => {
    const {title, image, price,quantity} = props;
    const dispatch = useDispatch();
    
  return (
    <motion.div layout transition={{duration: 1}} className=" mx-auto border p-2 md:p-5 rounded shadow mt-3 md:mt-5">
        <div className=" flex items-center justify-between ">
          <div className=" flex gap-3 items-center">
            <img
              src={image}
              className=" w-20 h-20 md:w-36 md:h-36 object-contain m-3 md:m-5"
            />
            <div className=" space-y-3">
              <p className=" text-sm md:text-lg">{title.substr(0,25)}...</p>
              <p className=" text-sm md:text-lg">$ {price.toFixed(2) * quantity}</p>
              <button onClick={() => dispatch(removeFromcart(props))} className=' text-sm md:text-lg text-white rounded px-3 py-1 hover:bg-red-700 duration-200 border cursor-pointer bg-red-500'>remove</button>
            </div>
          </div>
  
          <div className=" flex flex-col items-center space-y-2 md:space-y-3">
            <IoIosArrowUp onClick={() => dispatch(incresequantity(props))} className=" cursor-pointer select-none" />
            <p>{quantity}</p>
            <IoIosArrowDown onClick={() => dispatch(decresequantity(props))} className=" cursor-pointer select-none" />
          </div>
        </div>
      </motion.div>
  )
}

export default Cart