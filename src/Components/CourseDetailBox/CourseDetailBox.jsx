import React from "react";

export default function CourseDetailBox({ title, desc, icon }) {
  return (
    <div className="col-6">
      <div className="flex rounded-lg py-7 px-8 shadow-lg my-4 mx-0">
        <div className="flex justify-center items-center">
          <i className={`text-6xl text-[#6c757d] fas fa-${icon}`}></i>
        </div>
        <div className="flex flex-col ml-6">
          <span className="text-7 text-[#858c96]">{title}</span>
          <span className="text-7 text-text">{desc}</span>
        </div>
      </div>
    </div>
  );
}
