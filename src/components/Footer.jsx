/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { FaLinkedin, FaGithubSquare, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-gradient-to-r from-[#eeaeca] via-[#cca0db] to-[#b094e9] w-full py-20 text-white">
      <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8">
        <div>
          <h1 className="w-full text-3xl font-bold text-black">MyWebDesign</h1>
          <p className="py-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            iusto possimus temporibus sit at laboriosam? Voluptatum quibusdam
            cum corporis possimus!
          </p>
          <div className="flex justify-start gap-10 md:w-[75%] my-6">
            <FaLinkedin size={30} />
            <FaInstagram size={30} />
            <FaGithubSquare size={30} />
          </div>
        </div>
        <div className="lg:col-span-2 flex justify-between p-2 mt-4">
          <div>
            <h6 className="font-medium text-black">Solutions</h6>
            <ul>
              <li className="py-2 text-sm">
                <a href="">Analytics</a>
              </li>
              <li className="py-2 text-sm">
                <a href="">Marketing</a>
              </li>
              <li className="py-2 text-sm">
                <a href="">Commerce</a>
              </li>
              <li className="py-2 text-sm">
                <a href="">Insights</a>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-black">Support</h6>
            <ul>
              <li className="py-2 text-sm">
                <a href="">Pricing</a>
              </li>
              <li className="py-2 text-sm">
                <a href="">Documentation</a>
              </li>
              <li className="py-2 text-sm">
                <a href="">Guides</a>
              </li>
              <li className="py-2 text-sm">
                <a href="">API Status</a>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-black">Company</h6>
            <ul>
              <li className="py-2 text-sm">
                <a href="">About</a>
              </li>
              <li className="py-2 text-sm">
                <a href="">Blog</a>
              </li>
              <li className="py-2 text-sm">
                <a href="">Jobs</a>
              </li>
              <li className="py-2 text-sm">
                <a href="">Careers</a>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-black">Legal</h6>
            <ul>
              <li className="py-2 text-sm">
                <a href="">Claim</a>
              </li>
              <li className="py-2 text-sm">
                <a href="">Policy</a>
              </li>
              <li className="py-2 text-sm">
                <a href="">Terms</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="text-center">
        &copy; Copyright. MyWebDesign 2024. <br />{" "}
        <span>
          <a href="https://www.linkedin.com/in/farzanofme/"> Farzan Ullah </a>
        </span>
      </p>
    </div>
  );
}

export default Footer;
