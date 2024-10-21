import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { MdOutlineClose } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

export default function TopBar() {
  const [isShowSidebar, setIsShowSidebar] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  const sidebarHandler = () => {
    setIsShowSidebar(true);
  };

  const closeSidebarHandler = () => {
    setIsShowSidebar(false);
  };

  return (
    <>
      <div className="py-8 px-0 bg-accent hidden 2xl:flex">
        <div className="container-fluid">
          <div className="flex justify-between py-0 px-6">
            <div className="flex">
              <ul className="flex">
                <li className="top-bar__item">
                  <Link
                    to="/course-info/:htmlTraining"
                    className="text-text transition-all duration-500 ease-in-out text-2xl py-0 px-4 hover:text-[#878282]"
                  >
                    Html training
                  </Link>
                </li>
                <li className="top-bar__item">
                  <Link
                    to="/course-info/:CssTraining"
                    className="text-text transition-all duration-500 ease-in-out text-2xl py-0 px-4 hover:text-[#878282]"
                  >
                    Css training
                  </Link>
                </li>
                <li className="top-bar__item">
                  <Link
                    to="/course-info/:JsTraining"
                    className="text-text transition-all duration-500 ease-in-out text-2xl py-0 px-4 hover:text-[#878282]"
                  >
                    JavaScript training
                  </Link>
                </li>
                <li className="top-bar__item">
                  <Link
                    to="/course-info/:TailwindTraining"
                    className="text-text transition-all duration-500 ease-in-out text-2xl py-0 px-4 hover:text-[#878282]"
                  >
                    Tailwind training
                  </Link>
                </li>
                <li className="top-bar__item">
                  <Link
                    to="/course-info/:ReduxTraining"
                    className="text-text transition-all duration-500 ease-in-out text-2xl py-0 px-4 hover:text-[#878282]"
                  >
                    Redux training
                  </Link>
                </li>
                <li className="top-bar__item">
                  <Link
                    to="/course-info/:CssTraining"
                    className="text-text transition-all duration-500 ease-in-out text-2xl py-0 px-4 hover:text-[#878282]"
                  >
                    React training
                  </Link>
                </li>
                <li className="top-bar__item">
                  <Link
                    to="/course-info/:CssTraining"
                    className="text-text transition-all duration-500 ease-in-out text-2xl py-0 px-4 hover:text-[#878282]"
                  >
                    3000$
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex">
              <div className="flex items-center">
                <a
                  href="#"
                  className=" text-text transition-all duration-500 ease-in-out text-2xl py-0 px-4 hover:text-[#878282]"
                >
                  sabzlearn@gmail.com
                </a>
                <i className="fas fa-envelope text-white text-4xl"></i>
              </div>
              <div className="flex items-center">
                <span
                  href="#"
                  className=" text-text transition-all duration-500 ease-in-out text-2xl py-0 px-4 hover:text-[#878282]"
                >
                  09922275120
                </span>
                <i className="fas fa-phone text-white text-4xl"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="2xl:hidden flex items-center justify-between mr-12 text-3xl">
        <IoMdMenu className="w-9 h-9 my-12 ml-16" onClick={sidebarHandler} />
        <img src="/images/logo/Logo.png" alt="Logo" />
        {isLogged ? (
          <Link
            to="/my-account"
            className="flex items-center py-0 px-6 border-2 border-solid !border-primary rounded-full ml-4 transition-all duration-400 ease-in-out text-text h-16 hover:!bg-primary hover:text-white"
          >
            <span className="main-header__profile-text">Mohammad Arab</span>
          </Link>
        ) : (
          <Link
            to="/register"
            className="flex items-center py-0 px-6 border-2 border-solid !border-primary rounded-full ml-4 transition-all duration-400 ease-in-out text-text h-16 hover:!bg-primary hover:text-white"
          >
            <span className="main-header__profile-text">Login / Register</span>
          </Link>
        )}
      </div>

      {isShowSidebar ? (
        <div className="bg-secondary w-1/3 h-screen overflow-y-auto fixed top-0 bottom-0 z-50 px-7 pb-16 transition-all left-0">
          <div className="flex items-center justify-between pb-5 mt-5 relative border-b !border-b-white">
            <span className="mx-4 w-[64px] mb-auto pt-12 text-text text-4xl">
              SabzLearn
            </span>
            <MdOutlineClose
              className="mb-auto mt-12 text-text text-4xl"
              onClick={closeSidebarHandler}
            />
          </div>
          <div>
            <ul className="flex w-full flex-col gap-5">
              <li className="flex justify-between items-center">
                <Link
                  to="/category/:FrontEnd"
                  className="py-2 px-8 text-6 transition-all duration-400 ease text-white"
                >
                  FrontEnd
                </Link>
                <IoIosArrowDown />
              </li>
              <li className="flex justify-between items-center">
                <Link
                  to="/category/:BackEnd"
                  className="block py-2 px-8 text-6 transition-all duration-400 ease text-white"
                >
                  Backend
                </Link>
                <IoIosArrowDown />
              </li>
              <li className="flex justify-between items-center">
                <Link
                  to="/category/:Security"
                  className="block py-2 px-8 text-6 transition-all duration-400 ease text-white"
                >
                  Security
                </Link>
                <IoIosArrowDown />
              </li>
              <li className="flex justify-between items-center">
                <Link
                  to="/category/:Python"
                  className="block py-2 px-8 text-6 transition-all duration-400 ease text-white"
                >
                  Python
                </Link>
                <IoIosArrowDown />
              </li>
              <li className="flex justify-between items-center">
                <Link
                  to="/articles"
                  className="block py-2 px-8 text-6 transition-all duration-400 ease !text-white"
                >
                  Articles
                </Link>
                <IoIosArrowDown />
              </li>
            </ul>
          </div>
        </div>
      ) : null}

      <hr />
    </>
  );
}
