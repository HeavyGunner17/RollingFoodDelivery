import React from "react";
import backgroundImage from "../assets/banner3.jpg";
import Featured from "./Featured";
import Testimonials from "../components/Testimonials";
import Stats from "../components/Stats";
import { Link } from "react-router-dom";


const Home = () => {
  const sectionStyle = {
    background: `url(${backgroundImage})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "100vw",
    height: "60vh", // Ajusta la altura según tus necesidades
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  const scroll ={
    overflowX: 'hidden', // Evita el scroll horizontal
  }

  return (
    <div className="mt-20 bg-slate-300" style={scroll}>
      <section style={sectionStyle}>
        <div className="mx-auto max-w-screen-xl py-16 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl text-yellow-400 m-1">
            The app that brings the food you love to <br />
              <strong className="font-extrabold text-red-600 sm:block mt-3">
                YOUR HOME
              </strong>
            </h1>

            <p className="m sm:text-xl/relaxed py-2">
            THERE’S SO MUCH TO CELEBRATE.
Receive $5 in Rolling Food when you purchase $25 in gift cards, now through 6/18/23!
            </p>

            <div className="m-8 flex flex-wrap justify-center gap-4">
              <Link
                className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-yellow-300 shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto border-4 border-yellow-400"
               to={"/productos"}
              >
                SHOP NOW!
              </Link>

              <Link
                className="block w-full rounded bg-gray-400 px-12 py-3 text-sm font-medium text-red-600 shadow hover:bg-gray-700 focus:outline-none focus:ring active:bg-slate-400 sm:w-auto border-4 border-red-400"
                to={"/404"}
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Featured />
      <Testimonials />
      <Stats />
    </div>
  );
};

export default Home;
