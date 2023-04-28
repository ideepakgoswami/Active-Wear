import React from 'react'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="w-1/4 px-4">
            <h2 className="text-lg font-medium text-gray-900">Filter by</h2>
            <div className="py-4">
                {/* <!-- Categories filter --> */}
                <h3 className="text-gray-700 font-mont font-bold mb-3">CATEGORIES</h3>
                <ul className="space-y-1">
                    <li>
                        <Link to="/products/AllProducts">
                            <button
                                href="/"
                                className="text-gray-600 hover:text-gray-900 font-medium focus:text-black"
                            >
                                All Products
                            </button>
                        </Link>

                    </li>
                    <li>
                        <Link to="/products/Athleisure">
                            <button
                                href="/"
                                className="text-gray-600 hover:text-gray-900 font-medium focus:text-black"
                            >
                                Athleisure
                            </button>
                        </Link>

                    </li>
                    <li>
                        <Link to="/products/Equipment">
                            <button
                                href="/"
                                className=" text-gray-600 hover:text-gray-900 font-medium focus:text-black"
                            >
                                Equipment
                            </button>
                        </Link>

                    </li>
                    <li>
                        <Link to="/products/Lifestyle">

                            <button
                                href="/"
                                className=" text-gray-600 hover:text-gray-900 font-medium focus:text-black"
                            >
                                Lifestyle
                            </button>
                        </Link>

                    </li>
                </ul>

                {/* <!-- Price filter --> */}
                <div className="mt-6">
                    <h3 className="text-gray-700 font-medium mb-3">Price</h3>
                    <div className="mt-2 flex items-center space-x-4">
                        <input
                            type="range"
                            min="0"
                            max="1000"
                            step="1"
                            // value="0"
                            className="slider w-full h-2 bg-gray-300 rounded-full"
                        />
                        <div className="flex flex-col items-center">
                            <span className="font-medium text-gray-700">$0</span>
                            <span className="font-medium text-gray-700">$1000</span>
                        </div>
                    </div>
                </div>

                {/* <!-- Rating filter --> */}
                <h3 className="text-gray-700 font-medium mb-3 mt-6">Rating</h3>
                <select className="form-select border-gray-300 shadow-sm">
                    <option value="1">1 star</option>
                    <option value="2">2 stars</option>
                    <option value="3">3 stars</option>
                    <option value="4">4 stars</option>
                    <option value="5">5 stars</option>
                </select>
                {/* <!-- Clear filters button --> */}
                <div className="mt-6">
                    <button
                        href="/"
                        className="bg-gray-800 text-white rounded-lg px-4 py-2 hover:bg-gray-700"
                    >
                        Clear Filters
                    </button>
                </div>
            </div>
        </div>

    )
}

export default Sidebar