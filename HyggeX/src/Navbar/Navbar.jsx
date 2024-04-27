import React from "react";
import { Link } from "react-router-dom";
import logo1 from "../assets/Hyggex_logo.svg";
import { MdOutlineMenu } from "react-icons/md";
export const Navbar = () => {
  return (
    <>
      <nav class=" w-full flex flex-wrap items-center justify-between px-[104px] pt-[32px] navbar-expand-lg bg-blueGray-800">
        <div class="container mx-auto flex flex-wrap items-center justify-between">
          <div class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start ">
            <img src={logo1} alt="logo" className="w-[191px]" />
          </div>

          <div
            class="lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none hidden bg-blueGray-800"
            id="example-collapse-navbar"
          >
            <ul class="flex flex-col lg:flex-row list-none lg:ml-auto items-center space-x-8 font-in">
              <Link
                className="md:px-4 md:py-2 text-gray-800  text-[18px]"
                to="/"
              >
                Home
              </Link>
              <Link
                className="md:px-4 md:py-2 text-gray-800 text-[18px]"
                to="/flashcard"
              >
                Flashcard
              </Link>
              <Link
                className="md:px-4 md:py-2 text-gray-800 text-[18px]"
                to="/contact"
              >
                Contact
              </Link>
              <Link
                className="md:px-4 md:py-2 text-gray-800 text-[18px]"
                to="/faq"
              >
                FAQ
              </Link>
              <div className="order-2 md:order-3">
                <button className="px-[40px] py-[13px] bg-gradient-to-t from-blue-900 to-blue-500 text-gray-50 rounded-[32px] flex items-center gap-2">
                  <span>Login</span>
                </button>
              </div>
            </ul>
          </div>
          <MdOutlineMenu className=" xl:hidden lg:hidden md:flex sm:flex" />
        </div>
      </nav>
    </>
  );
};
