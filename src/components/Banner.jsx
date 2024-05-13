import React from "react";
import { ReactTyped } from "react-typed";

function Banner() {
  return (
    <div className="bg-gradient-to-r from-[#eeaeca] via-[#cca0db] to-[#b094e9] w-full py-[100px] text-white">
      <div className="max-w-[1240px] my-[100px] mx-auto text-center font-bold">
        <p className="text-[black] font-bold p-2 text-3xl">Learn with us</p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Grow with us.
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Learn
          </p>
          <ReactTyped
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
            strings={[
              "Web Development",
              "FrontEnd Development",
              "FullStack Development",
            ]}
            typeSpeed={100}
            loop={true}
            backSpeed={80}
          />
        </div>
        <button className="bg-[black] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Banner;
