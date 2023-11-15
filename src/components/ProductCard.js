import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import '../App.css'

export default function App() {
  const items = useSelector((state) => state.allCart.items);
  const dispatch = useDispatch();

  return (
    <div className="m-2">
      {items.map((item) => (
        <div key={item.id}>
          <img src={item.img} alt={item.title} />
          <p>{item.title}</p>
          <p>{item.price}$</p>
          <button onClick={() => dispatch(addToCart(item))}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}
