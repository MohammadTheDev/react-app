import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import CourseBox from "../CourseBox/CourseBox";

export default function LastCourses() {
  return (
    <>
      <div className="my-24 mx-40 ">
        <div className="container ">
          <SectionHeader
            className="w-full"
            title="The latest courses"
            desc="Your launch pad to success"
            btnTitle="All Courses"
            btnHref="courses"
          />

          <div className="courses-content">
            <div className="container">
              <div className="row">
                <CourseBox
                  courseName="html"
                  titleCorse={"Free introductory to advanced HTML training"}
                  coverCourse="/images2/Html5.jpg"
                  teacherCourse="Amin"
                  studentsCount="2000"
                  priceCourse="Free"
                />
                <CourseBox
                  courseName="css"
                  titleCorse={"Free introductory to advanced Css training"}
                  coverCourse="/images2/Css3.jpg"
                  teacherCourse="Amir"
                  studentsCount="1970"
                  priceCourse="Free"
                />
                <CourseBox
                  courseName="tailwind"
                  titleCorse={
                    "Comprehensive training and project-oriented Tailwind css"
                  }
                  coverCourse="/images2/Tailwind.jpeg"
                  teacherCourse="Ali"
                  studentsCount="1500"
                  priceCourse="200$"
                />
                <CourseBox
                  courseName="javascript"
                  titleCorse={
                    "Free JavaScript training from introductory to advanced + mini project"
                  }
                  coverCourse="/images2/JS.jpg"
                  teacherCourse="Mohammad"
                  studentsCount="3000"
                  priceCourse="1000$"
                />
                <CourseBox
                  courseName="react"
                  titleCorse={
                    "Teaching React (ReactJS) in the real world From 0 to recruitment [mentorship]"
                  }
                  coverCourse="/images2/React.jpg"
                  teacherCourse="Qadir"
                  studentsCount="1000"
                  priceCourse="850$"
                />
                <CourseBox
                  courseName="redux"
                  titleCorse={
                    "Specialized Redux training from introductory to advanced"
                  }
                  coverCourse="/images2/Redux.jpg"
                  teacherCourse="Reza"
                  studentsCount="500"
                  priceCourse="700$"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
