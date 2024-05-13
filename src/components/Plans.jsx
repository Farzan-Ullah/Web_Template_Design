import React from "react";
import FirstCardImg from "../assets/images/single.png";
import SecondCardImg from "../assets/images/double.png";
import ThirdCardImg from "../assets/images/triple.png";

function Plans() {
  return (
    <div className="py-[100px] px-2">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        {/* First Card */}

        <div className="w-full rounded-lg shadow-xl flex flex-col my-4 p-4 hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={FirstCardImg}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            Web Development
          </h2>
          <p className="text-center text-4xl font-bold">$129</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8"> Lorem ipsum dolor sit </p>
            <p className="py-2 border-b mx-8">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
            <p className="py-2 border-b mx-8"> Lorem ipsum dolor sit amet. </p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Start Trail
          </button>
        </div>

        {/* Second Card */}

        <div className="w-full rounded-lg shadow-xl flex flex-col  md:my-0 my-8 p-4 bg-gray-100 hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-transparent"
            src={SecondCardImg}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            Full Stack Development
          </h2>
          <p className="text-center text-4xl font-bold">
            $99 <br />{" "}
            <span className="font-medium text-sm">**Special Offer**</span>
          </p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8"> Lorem ipsum dolor sit </p>
            <p className="py-2 border-b mx-8">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
            <p className="py-2 border-b mx-8"> Lorem ipsum dolor sit amet. </p>
          </div>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Start Trail
          </button>
        </div>

        {/* Third Card */}

        <div className="w-full rounded-lg shadow-xl flex flex-col my-4 p-4 hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={ThirdCardImg}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            App Development
          </h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8"> Lorem ipsum dolor sit </p>
            <p className="py-2 border-b mx-8">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
            <p className="py-2 border-b mx-8"> Lorem ipsum dolor sit amet. </p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Start Trail
          </button>
        </div>
      </div>
    </div>
  );
}

export default Plans;
