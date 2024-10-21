import React from "react";
import TopBar from "../../Components/TopBar/TopBar";
import NavBar from "../../Components/NavBar/NavBar";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import Pagination from "../../Components/Pagination/Pagination";
import Footer from "../../Components/Footer/Footer";
import CourseBox from "../../Components/CourseBox/CourseBox";

export default function Courses() {
  return (
    <div className="bg-background">
      <TopBar />
      <NavBar />

      <BreadCrumb
        links={[
          { id: 1, title: "Home", to: "" },
          {
            id: 2,
            title: "All Courses",
            to: "courses",
          },
        ]}
      />

      <section className="courses">
        <div className="container">
          <div className="my-12 mx-0">
            <div className="container">
              <div className="row">
                <CourseBox
                  titleCorse={"Free introductory to advanced HTML training"}
                  coverCourse="/images2/Html5.jpg"
                  teacherCourse="Amin"
                  studentsCount="2000"
                  priceCourse="Free"
                />
                <CourseBox
                  titleCorse={"Free introductory to advanced Css training"}
                  coverCourse="/images2/Css3.jpg"
                  teacherCourse="Amir"
                  studentsCount="1970"
                  priceCourse="Free"
                />
                <CourseBox
                  titleCorse={
                    "Comprehensive training and project-oriented Tailwind css"
                  }
                  coverCourse="/images2/Tailwind.jpeg"
                  teacherCourse="Ali"
                  studentsCount="1500"
                  priceCourse="200$"
                />
                <CourseBox
                  titleCorse={
                    "Free JavaScript training from introductory to advanced + mini project"
                  }
                  coverCourse="/images2/JS.jpg"
                  teacherCourse="Mohammad"
                  studentsCount="3000"
                  priceCourse="1000$"
                />
                <CourseBox
                  titleCorse={
                    "Teaching React (ReactJS) in the real world From 0 to recruitment [mentorship]"
                  }
                  coverCourse="/images2/React.jpg"
                  teacherCourse="Qadir"
                  studentsCount="1000"
                  priceCourse="850$"
                />
                <CourseBox
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
      </section>

      <Pagination />
      <Footer />
    </div>
  );
}
