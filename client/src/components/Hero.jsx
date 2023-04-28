import React from "react";
import backgroundImage from "../assets/images/HeroImg.png";
import { Link } from 'react-router-dom';

const Hero = () => {
  const sectionStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    minHeight: "90vh",
  };

  return (
    <section className="text-gray-600 body-font" style={sectionStyle}>
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-black text-navy font-mont ">Train With Purpose,
            <br className="hidden lg:inline-block" />Perform With Intention
          </h1>
          <p className="mb-8 leading-relaxed text-gray-200 font-rob text-bold">Elevate your fitness journey with active wear that inspires you to push harder, go further, and be your best self. <br />Take on any challenge with style and confidence, powered by our premium active wear.</p>
          <div className="flex justify-center">
            <Link to="/products/AllProducts">
              <button className="inline-flex text-navy font-semibold font-rob bg-gray-200 border-0 py-2 px-20 focus:outline-none rounded text-lg hover:bg-gray-300 hover:text-gray-900">Explore Now!</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
