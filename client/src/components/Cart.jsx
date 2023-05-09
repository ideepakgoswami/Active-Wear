import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { decreaseCart, removeFromCart, addToCart, clearCart, getTotals } from "../features/cartSlice"
import { useEffect } from "react"


const Cart = () => {
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart)

    useEffect(() => {
        dispatch(getTotals())
    }, [dispatch, cart])

    const handleRemoveFromCart = (cartItem) => {
        dispatch(removeFromCart(cartItem))
    }

    const handleDecreaseCart = (cartItem) => {
        dispatch(decreaseCart(cartItem))
    }

    const handleIncreaseCart = (cartItem) => {
        dispatch(addToCart(cartItem))
    }

    const handleClearCart = () => {
        dispatch(clearCart())
    }

    return (
        <div className="bg-gray-300">
            <div className="py-12">
                <div className="max-w-md mx-auto bg-gray-100 shadow-lg rounded-lg  md:max-w-5xl">
                    <div className="md:flex ">
                        <div className="w-full p-4 px-5 py-5">
                            <div className="md:grid md:grid-cols-3 gap-2 ">
                                <div className="col-span-2 p-5">
                                    <h1 className="text-xl font-medium ">Shopping Cart</h1>

                                    {cart.cartItems.length === 0 ? (
                                        <div className="cart-empty">
                                            <p className="mt-20 text-3xl font-bold text-gray-600">Your Cart Is Currently Empty</p>
                                        </div>
                                    ) : (
                                        cart.cartItems?.map((cartItem) => {
                                            return (
                                                <div className="flex justify-between items-center mt-6 pt-4 pb-2 border-b-2 border-gray-400" key={cartItem._id}>
                                                    <div className="flex items-center">
                                                        <img src={cartItem.image} className="rounded h-20 w-20 object-cover" alt="..." />
                                                        <div className="flex flex-col ml-3">
                                                            <span className="md:text-md font-medium">{cartItem.title}</span>
                                                            <span className="text-xs font-light text-gray-400">{`Product Category: ${cartItem.category}`}</span>
                                                            <span onClick={() => handleRemoveFromCart(cartItem)} className="cursor-pointer text-sm pt-5 text-gray-500 font-medium">Remove Item</span>
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-center items-center">
                                                        <div className="pr-8 flex ">
                                                            <button onClick={() => handleDecreaseCart(cartItem)} className="font-semibold">-</button>
                                                            <input type="text" className="focus:outline-none pointer-events-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2" value={cartItem.cartQuantity} />
                                                            <button onClick={() => handleIncreaseCart(cartItem)} className="font-semibold">+</button>
                                                        </div>
                                                        <div className="pr-8 ">
                                                            <p className="text-center text-xs font-bold pb-2">Item Price</p>
                                                            <span className="text-xs font-medium">{cartItem.price} ₹</span>
                                                        </div>
                                                        <div className="pr-8 ">
                                                            <p className="text-center text-xs font-bold pb-2">Total</p>
                                                            <span className="text-xs font-medium">{cartItem.price * cartItem.cartQuantity} ₹</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    )}

                                    <div className="flex justify-between items-center mt-6 pt-6 border-t">
                                        <button onClick={() => handleClearCart()} className=" h-10 w-40 bg-blue-600 hover:bg-blue-700 rounded-md mt-auto text-white font-medium focus:outline-none">Clear Cart</button>
                                        <Link to="/products/AllProducts">
                                            <span className="ml-5 text-md font-medium text-blue-500">Continue Shopping</span>
                                        </Link>
                                    </div>
                                </div>

                                {/* RIGHT SIDE SUBTOTAL */}
                                <div className="p-5 bg-gray-900 rounded-lg overflow-visible flex flex-col h-80">
                                    <div className="grid grid-cols-2 gap-2 pt-3">
                                        <div>
                                            <span className=" text-medium text-gray-400 mr-1 font-medium">Total Quantity</span>
                                        </div>
                                        <div className="text-right">
                                            <span className="text-medium font-bold text-gray-400">{cart.cartTotalQuantity}</span>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2 pt-4">
                                        <div>
                                            <span className=" text-medium text-gray-400 mr-1 font-medium">Sub Total</span>
                                        </div>
                                        <div className="text-right">
                                            <span className="text-medium font-bold text-gray-400">{cart.cartTotalAmount} ₹</span>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-2 pt-4">

                                        <div>
                                            <span className="text-medium text-gray-400 mr-1 font-medium">Shipping</span>
                                        </div>
                                        <div className="text-right">
                                            <span className="text-medium font-bold text-gray-400">{
                                                cart.cartItems.length === 0 ? (
                                                    "0"
                                                ) : (
                                                    "+150"
                                                )
                                            } ₹</span>
                                        </div>
                                    </div>
                                    <div className="border-t border-gray-600 mt-5 mb-2 ">
                                        <div className="grid grid-cols-2 pt-2 gap-2">
                                            <div>
                                                <span className="text-xl font-bold text-gray-100">Payable</span>
                                            </div>
                                            <div className="text-right flex flex-col">
                                                <span className="text-xl font-bold text-gray-100">{
                                                    cart.cartItems.length === 0 ? (
                                                        "0"
                                                    ) : (
                                                        cart.cartTotalAmount + 150
                                                    )
                                                } ₹</span>
                                                <span className="text-sm font-light text-gray-100">Including shipping</span>

                                            </div>
                                        </div>
                                    </div>
                                    <button className="h-12 bg-blue-600 hover:bg-blue-700 rounded-md mt-auto text-white font-medium focus:outline-none">Check Out</button>
                                </div>
                                {/* RIGHT SIDE SUBTOTAL ENDS */}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart