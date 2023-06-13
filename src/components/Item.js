import React, { useState } from "react";

function Item({ name, category }) {
  const [isInCart,setInCart]=useState(false)
  const handleInCart=()=>{
    setInCart(!isInCart)
  }
  const setClassName=isInCart?"in-cart" : ""
  return (
    <li className={setClassName}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleInCart}>Add to Cart</button>
    </li>
  );
}

export default Item;
