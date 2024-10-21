import React from "react";
import TopBar from "../../Components/TopBar/TopBar";
import Navbar from "../../Components/NavBar/NavBar";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import ArticleBox from "../../Components/ArticleBox/ArticleBox";
import Pagination from "../../Components/Pagination/Pagination";
import Footer from "../../Components/Footer/Footer";

export default function Articles() {
  return (
    <div className="bg-background">
      <TopBar />
      <Navbar />

      <BreadCrumb
        links={[
          { id: 1, title: "Home", to: "" },
          {
            id: 2,
            title: "All Articles",
            to: "/articles",
          },
        ]}
      />

      <section className="articles">
        <div className="container">
          <div className="my-12 mx-0">
            <div className="row">
              <ArticleBox
                cover="images2/JsonJavaScript.jpg"
                title="Json training in JavaScript"
                desc="What is json in JavaScript? JSON or JavaScript Object Notation means to mark JavaScript objects as a kind of low-volume data exchange format in this language..."
              />
              <ArticleBox
                cover="images2/JavaScriptES6.jpg"
                title="What is JavaScript ES6?"
                desc="What is JavaScript ES6? ES6 in JavaScript, or ECMAScript 2015, is the sixth version of the ECMAScript programming language. This version of the language..."
              />
              <ArticleBox
                cover="images2/VariablesJavaScript.PNG"
                title="Variables in JavaScript"
                desc="In the world of programming, variables are like a series of magic boxes that give life to programs. They allow us to store information, change it, and change it..."
              />
              <ArticleBox
                title="What is redox?"
                desc="What is redux and how can we use it? Redux is a tool for managing the state of JavaScript applications in a predictable way...."
                cover="images2/WhatRedux.jpg"
              />
              <ArticleBox
                title="What is typescript?"
                desc="What is typescript? This question is known as one of the main concerns of novice programmers. Typescript programming language is one of the languages used in the field..."
                cover="images2/WhatTypescript.jpg"
              />
              <ArticleBox
                title="Class training in JavaScript"
                desc="A class in JavaScript is like an instruction to create objects. Basically, the class tells the computer or browser what properties each object should have and what it can do..."
                cover="images2/ClassJavascript.jpg"
              />
              <ArticleBox
                title="The difference between TypeScript and JavaScript"
                desc="According to studies, TypeScript is the second most popular language among developers, and JavaScript is in third place in a continuous competition with this programming language. this..."
                cover="images2/TypeScript-VS-JavaScript.jpg"
              />
              <ArticleBox
                title="Learning to work with API in JavaScript"
                desc="The ability to make API calls in JavaScript is an essential skill for web developers in the programming world, allowing them to retrieve data from external sources...."
                cover="images2/ApiJavascript.jpg"
              />
              <ArticleBox
                title="What is GitHub?"
                desc="What is Git and GitHub and what is its mission in the world of software development? GitHub is a cloud-based website and service for..."
                cover="images2/WhatGithub.jpg"
              />
              <ArticleBox
                title="What is the backend?"
                desc="This is a question that may come to most people's minds; Back-end is a job in the field of programming that we intend to do in this article..."
                cover="images2/WhatBackend.jpg"
              />
            </div>
          </div>
        </div>
      </section>
      <Pagination />
      <Footer />
    </div>
  );
}
