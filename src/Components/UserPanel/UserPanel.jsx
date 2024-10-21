import React from "react";
import TopBar from "../TopBar/TopBar";
import NavBar from "../NavBar/NavBar";
import BreadCrumb from "./../BreadCrumb/BreadCrumb";
import SectionHeader from "./../SectionHeader/SectionHeader";
import CourseBox from "../CourseBox/CourseBox";
import ArticleBox from "../ArticleBox/ArticleBox";
import Footer from "../Footer/Footer";

export default function UserPanel() {
  return (
    <>
      <TopBar />
      <NavBar />

      <BreadCrumb
        links={[
          { id: 1, title: "Home", to: "" },
          {
            id: 2,
            title: "User Panel",
            to: "category/frontend",
          },
        ]}
      />

      <div className="courses-content">
        <div className="container">
          <div className="row col-12">
            <SectionHeader
              className="w-full"
              title="The Course You Buy"
              desc="The All Course You Buy From Our Site"
            />

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

            <SectionHeader
              className="w-full"
              title="The Articles You Read"
              desc="The All Articles You Read From Our Site"
            />

            <ArticleBox
              articleName="jsonInJavascript"
              cover="images2/JsonJavaScript.jpg"
              title="Json training in JavaScript"
              desc="What is json in JavaScript? JSON or JavaScript Object Notation means to mark JavaScript objects as a kind of low-volume data exchange format in this language..."
            />
            <ArticleBox
              articleName="Es6"
              cover="images2/JavaScriptES6.jpg"
              title="What is JavaScript ES6?"
              desc="What is JavaScript ES6? ES6 in JavaScript, or ECMAScript 2015, is the sixth version of the ECMAScript programming language. This version of the language..."
            />
            <ArticleBox
              articleName="variables"
              cover="images2/VariablesJavaScript.PNG"
              title="Variables in JavaScript"
              desc="In the world of programming, variables are like a series of magic boxes that give life to programs. They allow us to store information, change it, and change it..."
            />
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
