import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addToCart } from "../../redux/CartSlice";
const Card = ({ item }) => {
  const { imageUrl, title, price, id } = item;

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleAddCart = (product) => {
    dispatch(addToCart(product));
    toast.success("Product Added To Cart");
  };

  return (
    <div className="card bg-base-100 shadow-sm p-4">
      <figure onClick={() => (window.location.href = `/productinfo/${id}`)}>
        <img src={imageUrl} alt={title} className=" h-30" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>₹ {price}</p>
        <div className="w-auto card-actions justify-end">
          <button
            onClick={() => handleAddCart(item)}
            className="btn btn-primary"
          >
            Add To Cart{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
