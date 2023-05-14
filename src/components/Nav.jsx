import React, { useEffect, useState } from "react";
import { Input } from "@mantine/core";
import {AiOutlineSearch, AiOutlineShoppingCart} from 'react-icons/ai'
import { Badge } from '@mantine/core';
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


const Nav = () => {
  const carditem = useSelector(state => (state.card.cardItems));
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
    const [search, setsearch] = useState('')

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async() => {
        const api = await fetch(`https://fakestoreapi.com/products/`);
        const data = await api.json();
        setProducts(data);
    }

    const filterpd = products.filter(pd => pd.title.toLowerCase().includes(search.toLowerCase()))

    const submitHandler = (e) => {
      e.preventDefault();
      navigate("/search", {state: {filterpd}})
    }
  return (
    <div className=" flex justify-between items-center p-3 md:p-7 border rounded shadow sticky top-0 z-10 w-auto bg-white mb-3 md:mb-5">
      <Link to={'/'}>
      <h1 className=" text-lg md:text-3xl text-blue-800 duration-300 cursor-pointer hover:text-blue-500">Shotify</h1>
      </Link>
      <div className=" flex items-center gap-1 md:gap-5">
        <form onSubmit={submitHandler}>
        <Input value={search} onChange={e => setsearch(e.target.value)} icon={<AiOutlineSearch/>} placeholder="Search..." className="w-36 md:w-auto" />

        </form>

        <Link to={'/addtocart'} >
        <div className="  relative">
          <AiOutlineShoppingCart className=" text-lg md:text-xl cursor-pointer"/>
          {/* <p className=" ">0</p> */}
          <Badge color="red" className="absolute -top-4 md:-top-5 rounded-full flex items-center justify-center">{carditem.length}</Badge>

        </div>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
