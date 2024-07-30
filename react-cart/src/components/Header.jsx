import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { useSelector } from "react-redux";
import logo from '../assets/logo.png'

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <nav style={{height:"50px"}}>
      <h2><Link to={"/"}><img src={logo} alt="LOGO" style={{height:"100%",width:"100%",objectFit:"contain"}}/></Link></h2>

      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/cart"}>
          <FiShoppingBag />
          <p>{cartItems.length}</p>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
