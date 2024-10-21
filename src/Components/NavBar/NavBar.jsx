import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function NavBar() {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <div className="main-header hidden 2xl:flex">
      <div className="container-fluid">
        <div className="flex items-center justify-between py-8 px-6">
          <div className="flex">
            <img
              src="/images/logo/Logo.png"
              className="main-header__logo"
              alt="Logo"
            />

            <ul className="main-header__menu flex">
              <li className="flex items-center justify-center relative py-0 px">
                <Link
                  to="/"
                  className="flex items-center justify-center relative text-[#7f8187] hover:text-text mx-8  "
                >
                  Main Page
                </Link>
              </li>

              <li className="main-header__item flex items-center justify-center relative py-0 px-4">
                <Link
                  to="/category/:FrontEnd"
                  className=" flex items-center justify-center relative text-[#7f8187] hover:text-text"
                >
                  Front End
                  <ul className="main-header__dropdown">
                    <li className="main-header__dropdown-item">
                      <Link
                        to="/course-info/:html"
                        className="block py-2.5 px-8 text-6 text-text transition-all duration-400 ease hover:!text-white"
                      >
                        Html training
                      </Link>
                    </li>
                    <li className="main-header__dropdown-item">
                      <Link
                        to="/course-info/:css"
                        className="block py-2.5 px-8 text-6 text-text transition-all duration-400 ease hover:!text-white"
                      >
                        Css training
                      </Link>
                    </li>
                    <li className="main-header__dropdown-item">
                      <Link
                        to="/course-info/:javascript"
                        className="block py-2.5 px-8 text-6 text-text transition-all duration-400 ease hover:!text-white"
                      >
                        JavaScript training
                      </Link>
                    </li>
                    <li className="main-header__dropdown-item">
                      <Link
                        to="/course-info/:flexbox"
                        className="block py-2.5 px-8 text-6 text-text transition-all duration-400 ease hover:!text-white"
                      >
                        FlexBox training
                      </Link>
                    </li>
                    <li className="main-header__dropdown-item">
                      <Link
                        to="/course-info/:react"
                        className="block py-2.5 px-8 text-6 text-text transition-all duration-400 ease hover:!text-white"
                      >
                        React comprehensive training
                      </Link>
                    </li>
                  </ul>
                </Link>
              </li>
              <li className="main-header__item flex items-center justify-center relative py-0 px-4">
                <Link
                  to="/category/:security"
                  className="flex items-center justify-center relative text-[#7f8187]  hover:text-text"
                >
                  security
                  <ul className="main-header__dropdown">
                    <li className="main-header__dropdown-item">
                      <Link
                        to="/course-info/:kaliLinux"
                        className="block py-2.5 px-8 text-6 text-text transition-all duration-400 ease hover:!text-white"
                      >
                        Kali Linux training
                      </Link>
                    </li>
                    <li className="main-header__dropdown-item">
                      <Link
                        to="/course-info/:blackPython"
                        className="block py-2.5 px-8 text-6 text-text transition-all duration-400 ease hover:!text-white"
                      >
                        Black Python tutorial
                      </Link>
                    </li>
                    <li className="main-header__dropdown-item">
                      <Link
                        to="/course-info/:blackJS"
                        className="block py-2.5 px-8 text-6 text-text transition-all duration-400 ease hover:!text-white"
                      >
                        Black JavaScript tutorial
                      </Link>
                    </li>
                    <li className="main-header__dropdown-item">
                      <Link
                        to="/course-info/:network"
                        className="block py-2.5 px-8 text-6 text-text transition-all duration-400 ease hover:!text-white"
                      >
                        Network training
                      </Link>
                    </li>
                  </ul>
                </Link>
              </li>
              <li className="main-header__item flex items-center justify-center relative py-0 px-4">
                <Link
                  to="/articles"
                  className="flex items-center justify-center relative text-[#7f8187] hover:text-text"
                >
                  articles
                  <ul className="main-header__dropdown">
                    <li className="main-header__dropdown-item">
                      <Link
                        to=".article-info/:webDevelopment"
                        className="block py-2.5 px-8 text-6 text-text transition-all duration-400 ease hover:!text-white"
                      >
                        Web Development
                      </Link>
                    </li>
                    <li className="main-header__dropdown-item">
                      <Link
                        to="/article-info/:JS"
                        className="block py-2.5 px-8 text-6 text-text transition-all duration-400 ease hover:!text-white"
                      >
                        JavaScript
                      </Link>
                    </li>
                    <li className="main-header__dropdown-item">
                      <Link
                        to="/article-info/:frontEnd"
                        className="block py-2.5 px-8 text-6 text-text transition-all duration-400 ease hover:!text-white"
                      >
                        frontEnd
                      </Link>
                    </li>
                  </ul>
                </Link>
              </li>
              <li className="main-header__item flex items-center justify-center relative py-0 px-4">
                <Link
                  to="/category/:python"
                  className="flex items-center justify-center relative text-[#7f8187] hover:text-text"
                >
                  Python
                  <ul className="main-header__dropdown">
                    <li className="main-header__dropdown-item">
                      <Link
                        to="/course-info/:python"
                        className="block py-2.5 px-8 text-6 text-text transition-all duration-400 ease hover:!text-white"
                      >
                        Python expert course
                      </Link>
                    </li>
                    <li className="main-header__dropdown-item">
                      <Link
                        to="/course-info/:projectsPython"
                        className="block py-2.5 px-8 text-6 text-text transition-all duration-400 ease hover:!text-white"
                      >
                        Practical projects with Python
                      </Link>
                    </li>
                    <li className="main-header__dropdown-item">
                      <Link
                        to="/course-info/:django"
                        className="block py-2.5 px-8 text-6 text-text transition-all duration-400 ease hover:!text-white"
                      >
                        Django expert course
                      </Link>
                    </li>
                  </ul>
                </Link>
              </li>
              <li className="main-header__item flex items-center justify-center relative py-0 px-4">
                <Link
                  to="/category"
                  className="flex items-center justify-center relative text-[#7f8187] hover:text-text"
                >
                  Soft skills
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex items-center">
            <a
              href="#"
              className="flex items-center justify-center w-16 h-16 rounded-lg !bg-primary"
            >
              <i className="fas fa-search text-white text-4xl"></i>
            </a>
            <a
              href="#"
              className="flex items-center justify-center w-16 h-16 rounded-lg ml-4 !bg-primary "
            >
              <i className="fas fa-shopping-cart text-white text-4xl transition-all duration-400 ease-in-out"></i>
            </a>
            {isLogged ? (
              <Link
                to="/my-account"
                className="flex items-center py-0 px-6 border-2 border-solid !border-primary rounded-lg ml-4 transition-all duration-400 ease-in-out text-text h-16 hover:!bg-primary hover:text-white"
              >
                <span className="main-header__profile-text">Mohammad Arab</span>
              </Link>
            ) : (
              <Link
                to="/register"
                className="flex items-center py-0 px-6 border-2 border-solid !border-primary rounded-lg ml-4 transition-all duration-400 ease-in-out text-text h-16 hover:!bg-primary hover:text-white"
              >
                <span className="main-header__profile-text">
                  Login / Register
                </span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
