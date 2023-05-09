import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addToCart } from "../features/cartSlice";

const ProductCard = ({ id, image, title, price, oldPrice, index, item }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleAddToCart = () => {
    dispatch(addToCart(item))
    // navigate("/cart")
  }

  return (
    <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
      <Link to={`/products/${id}`} key={id}>
        <img
          src={image}
          alt={`Product ${index}`}
          className="h-80 w-72 object-cover rounded-t-xl"
        />
      </Link>

      <div className="px-4 py-3 w-72">
        <Link to={`/products/${id}`} key={id}>
          <p className="text-lg font-bold text-black truncate block capitalize">
            {title}
          </p>
        </Link>

        <div className="flex items-center">
          <p className="text-lg font-semibold text-black cursor-auto my-3">
            {price} ₹
          </p>
          <del>
            <p className="text-sm text-gray-600 cursor-auto ml-2">{oldPrice} ₹</p>
          </del>

          {/* ICONS- CART */}
          <div className="ml-auto flex">
            <svg
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              className="bi bi-bag-plus py-2 cursor-pointer"
              viewBox="0 0 122.88 111.85"
              onClick={() => handleAddToCart(item)}
            >
              <path d="M4.06,8.22A4.15,4.15,0,0,1,0,4.06,4.13,4.13,0,0,1,4.06,0h6A19.12,19.12,0,0,1,20,2.6c5.44,3.45,6.41,8.38,7.8,13.94h91a4.07,4.07,0,0,1,4.06,4.06,5,5,0,0,1-.21,1.25L112.06,64.61a4,4,0,0,1-4,3.13H41.51c1.46,5.41,2.92,8.32,4.89,9.67C48.8,79,53,79.08,59.93,79h47.13a4.06,4.06,0,0,1,0,8.12H60c-8.63.1-13.94-.11-18.2-2.91s-6.66-7.91-8.95-17h0L18.94,14.46c0-.1,0-.1-.11-.21a7.26,7.26,0,0,0-3.12-4.68A10.65,10.65,0,0,0,10,8.22H4.06Zm80.32,25a2.89,2.89,0,0,1,5.66,0V48.93a2.89,2.89,0,0,1-5.66,0V33.24Zm-16.95,0a2.89,2.89,0,0,1,5.67,0V48.93a2.89,2.89,0,0,1-5.67,0V33.24Zm-16.94,0a2.89,2.89,0,0,1,5.66,0V48.93a2.89,2.89,0,0,1-5.66,0V33.24Zm41.72-8.58H30.07l9.26,34.86H105l8.64-34.86Zm2.68,67.21a10,10,0,1,1-10,10,10,10,0,0,1,10-10Zm-43.8,0a10,10,0,1,1-10,10,10,10,0,0,1,10-10Z" />
            </svg>


          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
