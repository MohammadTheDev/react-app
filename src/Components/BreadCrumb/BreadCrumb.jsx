import React from "react";
import { Link } from "react-router-dom";
import { HiArrowSmallRight } from "react-icons/hi2";

export default function BreadCrumb({ links }) {
  return (
    <section className="mb-8 2xl:mx-60">
      <div className="container">
        <div className="flex bg-white shadow-lg py-6 px-8 rounded-2xl">
          <div className="flex items-center justify-center w-14 h-14 bg-white rounded-2xl">
            <i className="fas fa-home text-3xl !text-accent"></i>
          </div>
          <ul className="flex items-center mr-6">
            {links.map((link) => (
              <li className="list-none">
                <Link
                  to={`/${link.to}`}
                  className="flex ml-4 items-center text-6 text-text hover:!text-primary"
                >
                  {link.title}
                  {link.id !== links.length ? (
                    <HiArrowSmallRight className="text-secondary text-6 my-0 mx-3" />
                  ) : null}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
