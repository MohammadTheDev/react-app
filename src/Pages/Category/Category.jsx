import React from "react";
import TopBar from "../../Components/TopBar/TopBar";
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import CourseBox from "./../../Components/CourseBox/CourseBox";
import Pagination from "../../Components/Pagination/Pagination";
import "./Category.css";

export default function Category() {
  return (
    <>
      <TopBar />
      <NavBar />

      <section className="my-16 mx-0">
        <div className="container">
          <div className="flex justify-between items-center p-9 shadow-lg shadow-[#46484d14]">
            <div className="flex items-center">
              <div className="py-3.5 px-4 flex items-center justify-center w-16 h-14 rounded-md text-text cursor-pointer border-solid border-2 border-[#e5e5e5] ml-4 courses-top-bar__icon--active">
                <i className="fas fa-border-all courses-top-bar__icon"></i>
              </div>
              <div className="py-3.5 px-4 flex items-center justify-center w-16 h-14 rounded-md text-text cursor-pointer border-solid border-2 border-[#e5e5e5] ml-4 ">
                <i className="fas fa-align-left courses-top-bar__icon"></i>
              </div>

              <div className="cursor-pointer courses-top-bar__selection">
                <span className="flex items-center h-14 rounded-md py-3.5 px-8 border-solid border-2 border-[#e5e5e5] text-[#7d7e7f] transition-colors delay-100 ease-in hover:text-white hover:bg-primary">
                  Default sort
                  <i className="fas fa-angle-down mr-2"></i>
                </span>
                <ul className="courses-top-bar__selection-list">
                  <li className="text-[#5f5f5f] text-2xl py-4 px-6 transition-all duration-200 ease-in hover:bg-secondary">
                    Default sort
                  </li>
                  <li className="text-[#5f5f5f] text-2xl py-4 px-6 transition-all duration-200 ease-in hover:bg-secondary">
                    Sort by popularity
                  </li>
                  <li className="text-[#5f5f5f] text-2xl py-4 px-6 transition-all duration-200 ease-in hover:bg-secondary">
                    Sort by score
                  </li>
                  <li className="text-[#5f5f5f] text-2xl py-4 px-6 transition-all duration-200 ease-in hover:bg-secondary">
                    Sort by latest
                  </li>
                  <li className="text-[#5f5f5f] text-2xl py-4 px-6 transition-all duration-200 ease-in hover:bg-secondary">
                    Multiplying based on the cheapest
                  </li>
                  <li className="text-[#5f5f5f] text-2xl py-4 px-6 transition-all duration-200 ease-in hover:bg-secondary">
                    Multiplication based on the most expensive
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <form action="#" className="relative w-96">
                <input
                  type="text"
                  className="text-2xl w-full border-solid border-2 border-[#dcdcdc] pt-3.5 pr-6 pb-3.5 pl-16 rounded-md"
                  placeholder="Course search..."
                />
                <i className="fas fa-search absolute left-4 top-4 text-4xl text-[#7d7e7f] cursor-pointer"></i>
              </form>
            </div>
          </div>

          <div className="courses-content">
            <div className="container">
              <div className="row">
                <CourseBox
                  titleCorse="Javascript"
                  coverCourse="/images2/JS.jpg"
                  teacherCourse="Mohammad Arab"
                  studentsCount="2000"
                  priceCourse="1000$"
                />
                <CourseBox
                  titleCorse="ReactJs"
                  coverCourse="/images2/React.jpg"
                  teacherCourse="Mohammad Arab"
                  studentsCount="1000"
                  priceCourse="800$"
                />
                <CourseBox
                  titleCorse="Redux"
                  coverCourse="/images2/Redux.jpg"
                  teacherCourse="Mohammad Arab"
                  studentsCount="500"
                  priceCourse="750$"
                />
              </div>
            </div>
          </div>

          <Pagination />
        </div>
      </section>

      <Footer />
    </>
  );
}
