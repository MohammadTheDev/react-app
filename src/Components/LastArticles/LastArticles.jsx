import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import ArticleBox from "../ArticleBox/ArticleBox";

export default function LastArticles() {
  return (
    <section className="my-16 mx-40">
      <div className="container">
        <SectionHeader
          title="Latest Articles"
          desc="Towards the advancement of knowledge"
          btnTitle="All Articles"
          btnHref="articles"
        />
        <div className="articles__content">
          <div className="row">
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
      </div>
    </section>
  );
}
