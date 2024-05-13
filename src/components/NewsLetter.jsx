/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function NewsLetter() {
  return (
    <div className=" bg-gradient-to-r from-[#eeaeca] via-[#cca0db] to-[#b094e9] p-4">
      <div className="max-w-[1240px] mx-auto md:flex justify-between py-[40px]">
        <div className="m-2 mb-5">
          <h1 className="text-[20px] md:text-[40px] font-bold text-white">
            Want to learn latest I.T skills?
          </h1>
          <span className="text-white ">
            Sign up to our newsletter and stay up to date.
          </span>
        </div>
        <div className="m-2">
          <input
            type="text"
            className="p-3 mr-2 text-slate-600 rounded mb-2 outline-none"
            placeholder="Enter Email"
          />
          <button className="bg-black text-white p-3 rounded mb-2">
            Notify Me
          </button>
          <br />
          <p className="text-white">
            We care bout the protection of your data. Read our <br />
            <a href="" className="text-black">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
