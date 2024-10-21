import React from "react";
import SectionHeader from "./../SectionHeader/SectionHeader";
import CourseBox from "../CourseBox/CourseBox";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function PopularCourses() {
  return (
    <div className="my-20 mx-40">
      <div className="container">
        <SectionHeader
          title="Most Popular Courses"
          desc="Popular Courses Based on Student Scores"
        />

        <div className="course-content">
          <div className="container">
            <div className="row">
              <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
              >
                <SwiperSlide className="!w-full 2xl:!w-[422.333px] mr-8">
                  <CourseBox
                    nameCourse="html"
                    titleCorse={"Free introductory to advanced HTML training"}
                    coverCourse="/images2/Html5.jpg"
                    teacherCourse="Amin"
                    studentsCount="2000"
                    priceCourse="Free"
                    isSlider={true}
                  />
                </SwiperSlide>
                <SwiperSlide className="!w-full 2xl:!w-[422.333px] mr-8">
                  <CourseBox
                    nameCourse="css"
                    titleCorse={"Free introductory to advanced Css training"}
                    coverCourse="/images2/Css3.jpg"
                    teacherCourse="Amir"
                    studentsCount="1970"
                    priceCourse="Free"
                    isSlider={true}
                  />
                </SwiperSlide>
                <SwiperSlide className="!w-full 2xl:!w-[422.333px] mr-8">
                  <CourseBox
                    nameCourse="tailwind"
                    titleCorse={
                      "Comprehensive training and project-oriented Tailwind css"
                    }
                    coverCourse="/images2/Tailwind.jpeg"
                    teacherCourse="Ali"
                    studentsCount="1500"
                    priceCourse="200$"
                    isSlider={true}
                  />
                </SwiperSlide>
                <SwiperSlide className="!w-full 2xl:!w-[422.333px] mr-8">
                  <CourseBox
                    nameCourse="javascript"
                    titleCorse={
                      "Free JavaScript training from introductory to advanced + mini project"
                    }
                    coverCourse="/images2/JS.jpg"
                    teacherCourse="Mohammad"
                    studentsCount="3000"
                    priceCourse="1000$"
                    isSlider={true}
                  />
                </SwiperSlide>
                <SwiperSlide className="!w-full 2xl:!w-[422.333px] mr-8 ">
                  <CourseBox
                    nameCourse="react"
                    titleCorse={
                      "Teaching React (ReactJS) in the real world From 0 to recruitment [mentorship]"
                    }
                    coverCourse="/images2/React.jpg"
                    teacherCourse="Qadir"
                    studentsCount="1000"
                    priceCourse="850$"
                    isSlider={true}
                  />
                </SwiperSlide>
                <SwiperSlide className="!w-full 2xl:!w-[422.333px] mr-8">
                  <CourseBox
                    nameCourse="redux"
                    titleCorse={
                      "Specialized Redux training from introductory to advanced"
                    }
                    coverCourse="/images2/Redux.jpg"
                    teacherCourse="Reza"
                    studentsCount="500"
                    priceCourse="700$"
                    isSlider={true}
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
