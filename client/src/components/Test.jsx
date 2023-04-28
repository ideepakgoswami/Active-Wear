

const Cart = () => {


  return (
    <>
      <div className="bg-gray-300">
        <div className="py-12">
          <div className="max-w-md mx-auto bg-gray-100 shadow-lg rounded-lg  md:max-w-5xl">
            <div className="md:flex ">
              <div className="w-full p-4 px-5 py-5">
                <div className="md:grid md:grid-cols-3 gap-2 ">
                  <div className="col-span-2 p-5">
                    <h1 className="text-xl font-medium ">Shopping Cart</h1>


                    {/* PRODUCT CARD  */}
                    {
                      {/* cart.map((data, index) => {
                                              return (
                                                  <div className="flex justify-between items-center mt-6 pt-6">
                                                      <div className="flex items-center">
                                                          <img src={data.image} className="rounded h-20 w-20 object-cover" alt="..." />
                                                          <div className="flex flex-col ml-3">
                                                              <span className="md:text-md font-medium">{data.title}</span>
                                                              <span className="text-xs font-light text-gray-400">{`Product Category: ${data.category}`}</span>
                                                          </div>
                                                      </div>
                                                      <div className="flex justify-center items-center">
                                                          <div className="pr-8 flex ">
                                                              <span className="font-semibold">-</span>
                                                              <input type="text" className="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2" value={data.totalQuantity} />
                                                              <span className="font-semibold">+</span>
                                                          </div>
                                                          <div className="pr-8 ">
                                                              <span className="text-xs font-medium">{data.price}</span>
                                                          </div>
                                                          <div>
                                                              <i className="fa fa-close text-xs font-medium"></i>
                                                          </div>
                                                      </div>
                                                  </div>)
                                          }) */}
                    }
                    {/* PRODUCT CARD ENDS */}

                    <div className="flex justify-between items-center mt-6 pt-6 border-t">
                      <span className="text-md  font-medium text-blue-500">Continue Shopping</span>
                    </div>
                  </div>

                  {/* RIGHT SIDE SUBTOTAL */}
                  <div className="p-5 bg-gray-900 rounded-lg overflow-visible flex flex-col h-80">
                    <div className="grid grid-cols-2 gap-2 pt-3">
                      <div>
                        <span className=" text-medium text-gray-400 mr-1 font-medium">Total Quantity</span>
                      </div>
                      <div className="text-right">
                        <span className="text-medium font-bold text-gray-400">totalQuantity</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 pt-4">
                      <div>
                        <span className=" text-medium text-gray-400 mr-1 font-medium">Total Price</span>
                      </div>
                      <div className="text-right">
                        <span className="text-medium font-bold text-gray-400">totalPrice</span>
                      </div>
                    </div>

                    {/* <div className="grid grid-cols-2 gap-2 pt-4">

                                          <div>
                                              <span className="text-medium text-gray-400 mr-1 font-medium">Shipping</span>
                                          </div>
                                          <div className="text-right">
                                              <span className="text-medium font-bold text-gray-400">50 Rs</span>
                                          </div>
                                      </div> */}
                    {/* <div className="border-t border-gray-600 mt-5 mb-2 ">
                                          <div className="grid grid-cols-2 pt-2 gap-2">
                                              <div>
                                                  <span className="text-xl font-bold text-gray-100">Payable</span>
                                              </div>
                                              <div className="text-right flex flex-col">
                                                  <span className="text-xl font-bold text-gray-100">150  Rs</span>
                                                  <span className="text-sm font-light text-gray-100">Including shipping</span>

                                              </div>
                                          </div>
                                      </div> */}
                    <button className="h-12 bg-blue-600 hover:bg-blue-700 rounded-md mt-auto text-white font-medium focus:outline-none">Check Out</button>
                  </div>
                  {/* RIGHT SIDE SUBTOTAL ENDS */}

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>

  )
}

export default Cart