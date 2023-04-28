import React from "react";
import { Header, Home, Footer, SingleProduct, SignIn, SignUp, Cart } from "./components/Export";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductPage from "./components/ProductPage";
import Test from "./components/Test";
import { useGetAllProductsQuery, useGetAthleisureQuery, useGetEquipmentQuery, useGetLifestyleQuery } from './features/productsApi'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const { data: allProducts } = useGetAllProductsQuery()
  const { data: athleisure } = useGetAthleisureQuery()
  const { data: equipment } = useGetEquipmentQuery()
  const { data: lifestyle } = useGetLifestyleQuery()

  return (
    <Router>
      <ToastContainer />
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/products/AllProducts" element={<ProductPage AllProducts={allProducts} />} />
        <Route exact path="/products/Athleisure" element={<ProductPage Athleisure={athleisure} />} />
        <Route exact path="/products/Lifestyle" element={<ProductPage Lifestyle={lifestyle} />} />
        <Route exact path="/products/Equipment" element={<ProductPage Equipment={equipment} />} />
        <Route exact path="/products/:id" element={<SingleProduct AllProducts={allProducts} />} />
        <Route exact path="/signin" element={<SignIn />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/test" element={<Test />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;