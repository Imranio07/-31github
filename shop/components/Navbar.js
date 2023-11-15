import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getCartTotal } from "../features/cartSlice";

export default function App() {
  const { cart, totalQuantity } = useSelector((state) => state.allCart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  return (
    <nav >
      <div style={{  display:"flex",margin: "0 auto", padding: "10px" ,backgroundColor: "blue",color: "yellow"}}>
        <h2 style={{justifyContent:"start"}}>magazin.kg</h2>
        <span style={{ marginRight: "120px" }}>
          <Link to="/"><h3  style={{ color: "black",marginRight: "120px" }}><b>All Product ||</b></h3></Link>
        </span>
        <span>
          <Link to="/cart"><h3 style={{ color: "black" }}><b>Cart ({totalQuantity})</b></h3>
          </Link>
        </span>
      </div>
    </nav>
  );
}
