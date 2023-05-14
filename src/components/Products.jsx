import React, { useEffect, useState } from 'react'
import SingleProduct from './SingleProduct';
import Loading from './Loading';
import { motion } from 'framer-motion';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [condi, setcondi] = useState(true)

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async() => {
        const api = await fetch(`https://fakestoreapi.com/products/`);
        const data = await api.json();
        setProducts(data);
        setcondi(false)
    }

    if(condi){
        return (<Loading/>)
    }
  return (
    <motion.div layout className=' flex flex-wrap gap-2 md:gap-5 justify-evenly items-center'>
        {
            products?.map(pd => <SingleProduct key={pd.id} {...pd} />)
        }
    </motion.div>
  )
}

export default Products