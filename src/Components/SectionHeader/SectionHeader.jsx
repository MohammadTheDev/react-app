import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

export default function SectionHeader({ title, desc, btnTitle, btnHref }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col">
        <span className="courses-header__title title">{title}</span>
        <span className="text-[#9c9c9c] mt-2">{desc}</span>
      </div>

      {btnTitle ? (
        <div className="courses-header__left">
          <Link
            to={`/${btnHref}`}
            className="flex items-center justify-center text-white !bg-primary py-2 px-4 rounded-lg hover:text-white"
          >
            {btnTitle}
            <FaArrowRight className="ml-2 text-2xl" />
          </Link>
        </div>
      ) : null}
    </div>
  );
}
