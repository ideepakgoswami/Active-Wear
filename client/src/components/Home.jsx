import React from "react";
import { Hero, BestSeller } from "./Export";
import Categories from "./Categories"

const Home = () => {
  return (
    <>
      <Hero />
      <Categories />
      <BestSeller />
    </>
  );
};

export default Home;
