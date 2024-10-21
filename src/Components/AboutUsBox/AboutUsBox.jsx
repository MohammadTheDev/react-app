import React from "react";

export default function AboutUsBox(props) {
  return (
    <div className="col-12 2xl:w-1/2">
      <div className="flex items-center shadow-lg rounded-3xl my-8 mx-0 py-8 px-6 bg-white">
        <div className=" text-icon text-8xl">
          <i className={`fas ${props.icon} about-us__icon mr-12`}></i>
        </div>
        <div className="flex flex-col mr-4">
          <span className="text-text font-bold text-3xl">{props.title}</span>
          <span className="text-text">{props.desc}</span>
        </div>
      </div>
    </div>
  );
}
