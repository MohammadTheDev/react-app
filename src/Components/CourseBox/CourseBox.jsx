import React, { useState } from "react";
import { Link } from "react-router-dom";
import CircleSpinner from "../CircleSpinner/CircleSpinner";
import { FaStar } from "react-icons/fa";

export default function CourseBox(props) {
  const [isImgShow, setIsImgShow] = useState(false);

  const onImageLoaded = () => setIsImgShow(true);

  return (
    <>
      <div
        className="col-12 2xl:w-1/3"
        style={{ width: `${props.isSlider && "100%"}` }}
      >
        <div className="!bg-white shadow-lg rounded-2xl my-8 mx-0 transition-all duration-400 ease hover:transform hover:-translate-y-6">
          <Link to={`/course-info/:${props.courseName}`}>
            <img
              src={props.coverCourse}
              className="w-screen rounded-t-lg"
              onLoad={onImageLoaded}
            />

            {!isImgShow && <CircleSpinner />}
          </Link>
          <div className="py-0 px-5">
            <a href="#" className="block py-4 px-0">
              {props.titleCorse}
            </a>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <i className="fas fa-chalkboard-teacher text-accent text-7 mr-4"></i>
                <a href="#" className="text-[#6c757d] text-5">
                  {props.teacherCourse}
                </a>
              </div>
              <div className="flex justify-evenly">
                <FaStar className="text-[#FEF609]" />
                <FaStar className="text-[#FEF609]" />
                <FaStar className="text-[#FEF609]" />
                <FaStar className="text-[#FEF609]" />
                <FaStar className="text-[#FEF609]" />
              </div>
            </div>

            <div className="flex items-center justify-between py-4 px-0">
              <div className="course-box__users">
                <i className="fas fa-users text-[#6c757d] text-6 mr-4"></i>
                <span className="text-[#6c757d] text-6">
                  {props.studentsCount}
                </span>
              </div>
              <span className="text-[#9c9c9c] text-7">{props.priceCourse}</span>
            </div>
          </div>

          <div className="bg-accent flex items-center justify-center py-4 px-0 border-t border-solid border-gray-200 hover:bg-primary hover:cursor-pointer">
            <a
              href="#"
              className="flex items-center justify-center text-text text-6 font-bold"
            >
              View information
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
