import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Header() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="bg-gradient-to-r from-[#eeaeca] via-[#cca0db] to-[#b094e9] w-full p-4">
      <div className="max-w-[1240px] py-[15px] flex items-center justify-between  mx-auto">
        <div className="text-3xl font-bold">MyWebDesign</div>
        {toggle ? (
          <AiOutlineClose
            onClick={() => setToggle(!toggle)}
            className="text-white text-2xl md:hidden block"
          />
        ) : (
          <AiOutlineMenu
            onClick={() => setToggle(!toggle)}
            className="text-white text-2xl md:hidden block"
          />
        )}

        <ul className="hidden md:flex gap-10 text-white">
          <li>Home</li>
          <li>Company</li>
          <li>Resources</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        {/*Responsive Menu*/}
        <ul
          className={`duration-300 md:hidden w-full h-[80%] absolute bg-black top-[97px] text-white
        ${toggle ? "left-[0%]" : "left-[-100%]"}`}
        >
          <li className="p-5">Home</li>
          <li className="p-5">Company</li>
          <li className="p-5">Resources</li>
          <li className="p-5">About</li>
          <li className="p-5">Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
