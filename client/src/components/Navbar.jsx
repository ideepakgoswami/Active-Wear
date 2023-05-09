import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { getTotals } from "../features/cartSlice"


const Navbar = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart)

  useEffect(() => {
    dispatch(getTotals())
  }, [dispatch, cart])
  return (
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link className="mr-5 hover:text-test" to="/home">
        Home
      </Link>
      <Link className="mr-5 hover:text-test" to="/products/AllProducts">
        Products
      </Link>
      <Link className="mr-5 hover:text-test" to="/signin">
        Sign In
      </Link>
      <Link to='/cart' className="inline-flex items-center py-1 px-3 rounded text-base mt-4 md:mt-0 hover:text-test">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="bi bi-handbag-fill "
          viewBox="0 0 16 16"
        >
          <path d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2zM5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0V5z" />
        </svg>
        <span className="ml-1 bag-quantity flex items-center justify-center bg-yellow-400 p-1 w-7 h-7 text-black rounded-full">
          <span className=" font-medium text-sm ">{cart.cartTotalQuantity}</span>
        </span>
      </Link>
    </nav>

  );
};

export default Navbar;