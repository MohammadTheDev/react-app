import React from "react";

export default function Pagination() {
  return (
    <div className="my-12 mx-0">
      <ul className="flex items-center justify-center">
        <li className="courses__pagination-item">
          <a
            href="#"
            className="rounded-lg w-16 h-16 flex justify-center items-center text-2xl bg-accent my-0 mx-2 hover:bg-white"
          >
            <i className="fas fa-long-arrow-alt-right"></i>
          </a>
        </li>
        <li className="courses__pagination-item">
          <a
            href="#"
            className="rounded-lg w-16 h-16 flex justify-center items-center text-2xl bg-secondary my-0 mx-2 hover:!bg-white"
          >
            1
          </a>
        </li>
        <li className="courses__pagination-item">
          <a
            href="#"
            className="rounded-lg w-16 h-16 flex justify-center items-center text-2xl bg-accent my-0 mx-2 hover:bg-white"
          >
            2
          </a>
        </li>

        <li className="courses__pagination-item">
          <a
            href="#"
            className="rounded-lg w-16 h-16 flex justify-center items-center text-2xl bg-accent my-0 mx-2 hover:bg-white"
          >
            <i className="fas fa-long-arrow-alt-left"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}
