import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getCartTotal,
  removeItem,
  decreaseItemQuantity,
  increaseItemQuantity,
} from "../features/cartSlice";

const CartPage = () => {
  const { cart, totalQuantity, totalPrice } = useSelector(
    (state) => state.allCart
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  return (
    <div>
      <section>
        <div>
          <h5>Cart - {cart.length} items</h5>
        </div>
        <div>
          {cart?.map((data) => (
            <div key={data.id}>
              <div>
                <div>
                  <img src={data.img} alt="Blue" />
                </div>
              </div>

              <div>
                <p>
                  <strong>{data.title}</strong>
                </p>

                <button
                  type="button"
                  onClick={() => dispatch(removeItem(data.id))}
                >
                  <i>Remove product</i>
                </button>
              </div>

              <div>
                <div style={{ maxWidth: "300px" }}>
                  <button
                    onClick={() => dispatch(decreaseItemQuantity(data.id))}
                  >
                    <i>decrease product</i>
                  </button>

                  <div>
                    <input
                      id="form1"
                      min="0"
                      name="quantity"
                      value={data.quantity}
                      type="number"
                      onChange={() => null}
                    />
                    <label htmlFor="form1">Quantity</label>
                  </div>

                  <button
                    onClick={() => dispatch(increaseItemQuantity(data.id))}
                  >
                    <i>increase product</i>
                  </button>
                </div>

                <p>
                  <strong>price {data.price}$</strong>
                </p>
              </div>
              <hr />
            </div>
          ))}
        </div>
        <div>
          <div>
            <div>
              <h5>Summary</h5>
            </div>
            <div>
              <ul>
                <li>
                  Total Quantity
                  <span>{totalQuantity}</span>
                </li>

                <li>
                  <div>
                    <strong>Total amount</strong>
                  </div>
                  <span>
                    <strong>{totalPrice}</strong>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CartPage;
