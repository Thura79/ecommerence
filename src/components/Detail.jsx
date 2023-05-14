import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "./Loading";

const Detail = () => {
  const { id } = useParams();
  const [item, setItem] = useState([]);
  const [images, setImages] = useState([]);
  const [change, setChange] = useState(true);
  const { title, price, image, category, description } = item;

  const fetchDetail = async () => {
    const api = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await api.json();
    setItem(data);
    setChange(false);
  };

  const imageDetail = async () => {
    const api = await fetch(
      `https://fakestoreapi.com/products/category/${category}`
    );
    const data = await api.json();
    setImages(data);
  };
  useEffect(() => {
    fetchDetail();
    imageDetail();
  }, [images]);
  return (
    <>
      {change ? (
        <Loading />
      ) : (
        <div>
          <div className=" p-5 flex flex-col md:flex-row items-center justify-start md:gap-5">
            <img
              src={image}
              className=" border rounded shadow p-3 md:p-5 w-36 h-36 object-contain m-3 md:m-5"
            />
            <div className=" space-y-2 mt-5 md:mt-0">
              <p
                className=" text-sm
                md:text-base p-1 border rounded-3xl md:w-44 capitalize text-center
               bg-blue-800 text-white"
              >
                {category}
              </p>
              <p
                className=" text-sm
               md:text-base"
              >
                Title - {title}
              </p>
              <p
                className=" text-sm
               md:text-base"
              >
                Description -
                <span className=" text-slate-500 tracking-wide leading-7 md:tracking-widest">
                  {" "}
                  {description}
                </span>
              </p>
              <p
                className=" text-sm
               md:text-base"
              >
                Price - $ {price}
              </p>
              {/* <p> Rating - {rating} </p> */}
            </div>
          </div>

          <div className=" p-5">
            <h1 className=" border-b-2 border-blue-700 w-36 text-center md:w-44 text-sm md:text-xl font-bold my-5 md:my-10">
              You may also like
            </h1>
            <div className=" flex flex-wrap gap-5">
              {images?.map(
                (pd) =>
                  pd.id !== item.id && (
                    <Link key={pd?.id} to={`/detail/${pd.id}`}>
                      <img
                        src={pd.image}
                        className=" border rounded shadow p-2 md:p-5  w-28 h-28
                        md:w-36 md:h-36 object-contain"
                      />
                    </Link>
                  )
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Detail;
