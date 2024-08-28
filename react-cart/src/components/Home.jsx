import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import axios from 'axios'
import { Link } from "react-router-dom";
import Loader from "./Loader";
import { api_address } from "../App";


const Home =  () => {
  const [data,setData]=useState(null);
  const [loading,setLoading]=useState(true);
  useEffect(()=>{
    async function fetchData() {
      try {
        const data = await axios.get(api_address+"home").then(O=>O.data)
        setData(data);
        setLoading(false)
      }
    catch (e){
      console.log(e)
    }}
    fetchData();
  },[]);

  const dispatch = useDispatch();

  const addToCartHandler = (options) => {
    dispatch({ type: "addToCart", payload: options });
    dispatch({ type: "calculatePrice" });
    toast.success("Added To Cart");
  };
  if(loading){
    return (
      <div className="flex-center" style={{height:"100vh",width:"100vw"}}>
        <Loader />
      </div>
    )
  }else{
  return (
    <div className="home">
      {data.map((i,index) => (
        <Link to={"/product/"+i.id} key={index}>
        <ProductCard
          // key={index}
          imgSrc={i.images[0]}
          name={i.title}
          price={i.price}
          id={i.id}
          handler={addToCartHandler}
        />
        </Link>
      ))}
    </div>
  );
}};

const ProductCard = ({ name, id, price, handler, imgSrc }) => (
  <div className="productCard">
    <img src={imgSrc} alt={name} />
    <p>{name}</p>
    <h4>${price}</h4>
    <button onClick={() => handler({ name, price, id, quantity: 1, imgSrc })}>
      Add to Cart
    </button>
  </div>
);

export default Home;
