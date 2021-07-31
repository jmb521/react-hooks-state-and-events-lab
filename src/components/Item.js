import React, {useState} from "react";

function Item({ name, category }) {
  const [liClass, setLiClass] = useState("")
  const handleOnClick = (event) => {
    event.preventDefault()
    setLiClass("in-cart")
  }
  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add"onClick={handleOnClick}>Add to Cart</button>
    </li>
  );
}

export default Item;
