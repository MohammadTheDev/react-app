import React from "react";
import { FaStar } from "react-icons/fa";
import TopBar from "../../Components/TopBar/TopBar";
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import CommentsTextArea from "../../Components/CommentsTextArea/CommentsTextArea";

export default function ArticleInfo() {
  return (
    <>
      <TopBar />
      <NavBar />

      <BreadCrumb
        links={[
          { id: 1, title: "Home", to: "" },
          {
            id: 2,
            title: "Articles",
            to: "category-info/frontend",
          },
          {
            id: 3,
            title: "React vs Vue",
            to: "course-info/js-expert",
          },
        ]}
      />

      <main className="main 2xl:px-60">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="p-10 rounded-lg shadow-lg shadow-[#46484d14]">
                <h1 className="text-5xl font-bold text-[#464749] border-b-2 border-[#f3f3f3] pb-4 px-40 2xl:px-[40rem]">
                  Class training in JavaScript
                </h1>
                <hr className="mb-4 " />
                <div className="flex items-center justify-between pt-4">
                  <div className="article-header__category ml-8">
                    <a
                      href="#"
                      className="text-4xl text-text  font-bold mr-16 hover:text-[#8f8f8f]"
                    >
                      JavaScript
                    </a>
                  </div>
                  <div className="article-header__category article-header__category ml-8">
                    <span className="text-4xl text-text font-bold mr-16">
                      Posted by Mohammad
                    </span>
                  </div>
                  <div className="article-header__category article-header__category ml-8">
                    <span className="text-4xl text-text font-bold">
                      2.14k views
                    </span>
                  </div>
                </div>

                <img
                  src="/images2/JavaScriptES6.jpg"
                  alt="Article Cover"
                  className="mt-16 px-40"
                />

                <div className="flex items-center my-8 mx-4">
                  <div className="flex px-4">
                    <FaStar className="text-[#FEF609]" />
                    <FaStar className="text-[#FEF609]" />
                    <FaStar className="text-[#FEF609]" />
                    <FaStar className="text-[#FEF609]" />
                    <FaStar className="text-[#FEF609]" />
                  </div>
                  <span className="mr-8 text-3xl text-[#7d7d7f]">
                    5 - (5 points)
                  </span>
                </div>

                <p className="text-2xl text-[#7d7e7f]">
                  JavaScript is one of the main programming languages in the
                  front end field is that thanks to its frameworks, all kinds of
                  websites can be Designed applications and web applications.
                  Generally after Learning html and css usually includes
                  learning javascript get. . Because this language is
                  complementary to html and css and in In such a situation, you
                  will have more job opportunities You can also do more
                  extensive projects. in the present Now, with the free
                  resources available on the web, you can easily Learn the
                  JavaScript language professionally. By this means In the
                  following article, we are going to refer to the prominent
                  sites for teaching this language Let us introduce you to
                  programming in the world and finally say that What is the best
                  JavaScript training site?
                </p>

                <div className="bg-accent rounded-[3rem] py-8 px-12 my-12 mx-0 ">
                  <span className="font-extrabold text-[#333333] text-4xl mb-2 2xl:flex 2xl:items-center 2xl:justify-center">
                    What you will read in this article
                  </span>
                  <ul className="2xl:flex 2xl:items-center 2xl:justify-between article-read__list">
                    <li className="article-read__item">
                      <a
                        href="#"
                        className="leading-8 text-2xl text-text hover:underline"
                      >
                        Introducing the best JavaScript training sites:
                      </a>
                    </li>
                    <li className="article-read__item">
                      <a
                        href="#"
                        className="leading-8 text-2xl text-text hover:underline"
                      >
                        An easier way, Sabzlern Academy's JavaScript courses!
                      </a>
                    </li>
                    <li className="article-read__item">
                      <a
                        href="#"
                        className="leading-8 text-2xl text-text hover:underline"
                      >
                        Registering in Sabzlern JavaScript courses:
                      </a>
                    </li>
                  </ul>
                </div>

                <img
                  src="/images/blog/2.jpg"
                  alt="Article Image"
                  className="flex my-0 mx-auto"
                />

                <div className="my-20 mx-0">
                  <h2 className="text-4xl text-[#008c25] font-bold leading-5">
                    Introducing the best JavaScript training sites:
                  </h2>
                  <p className="text-2xl text-[#7d7e7f] my-8 mx-0">
                    Note that all websites that are rated as the best We
                    introduce the JavaScript training site below, international
                    and the resources in them are in English. as a result You
                    must have an intermediate or minimal command of the English
                    language Or translate existing resources using Google
                    Translate and use them. For this reason at the end of the
                    content We will tell you another easy way to learn Java
                    language There are scripts that you can use for free And
                    learn this language in Persian.
                  </p>
                  <img
                    src="/images/blog/4.png"
                    alt="article body img"
                    className="block my-0 mx-auto"
                  />
                </div>
                <div className="my-20 mx-0">
                  <h2 className="text-4xl text-[#008c25] font-bold leading-5">
                    Introducing the best JavaScript training sites:
                  </h2>
                  <p className="text-2xl text-[#7d7e7f] my-8 mx-0">
                    Note that all websites that are rated as the best Note that
                    all websites that are rated as the best We introduce the
                    JavaScript training site below, international and the
                    resources in them are in English. as a result You must have
                    an intermediate or minimal command of the English language
                    Or translate existing resources using Google Translate and
                    use them. For this reason at the end of the content We will
                    tell you another easy way to learn Java language There are
                    scripts that you can use for free And learn this language in
                    Persian.
                  </p>
                </div>
                <div className="my-20 mx-0">
                  <h2 className="text-4xl text-[#008c25] font-bold leading-5">
                    Introducing the best JavaScript training sites:
                  </h2>
                  <p className="text-2xl text-[#7d7e7f] my-8 mx-0">
                    Note that all websites that are rated as the best Note that
                    all websites that are rated as the best We introduce the
                    JavaScript training site below, international and the
                    resources in them are in English. as a result You must have
                    an intermediate or minimal command of the English language
                    Or translate existing resources using Google Translate and
                    use them. For this reason at the end of the content We will
                    tell you another easy way to learn Java language There are
                    scripts that you can use for free And learn this language in
                    Persian.
                  </p>
                  <img
                    src="/images/blog/3.jpg"
                    alt="article body img"
                    className="block my-0 mx-auto"
                  />
                </div>

                <div className="flex items-center">
                  <span className="text-2xl text-[#7d7e7f]">share :</span>
                  <a href="#" className="flex items-center m-2 text-[#7b868a]">
                    <i className="fab fa-telegram-plane article-social-media__icon"></i>
                  </a>
                  <a href="#" className="flex items-center m-2 text-[#7b868a]">
                    <i className="fab fa-twitter article-social-media__icon"></i>
                  </a>
                  <a href="#" className="flex items-center m-2 text-[#7b868a]">
                    <i className="fab fa-facebook-f article-social-media__icon"></i>
                  </a>
                </div>
              </div>

              <div className="my-16 mx-0 py-14 px-10 rounded-lg bg-[#f0f2f7] shadow-xl">
                <div className="row">
                  <div className="col-12 2xl:w-2/4">
                    <div className="relative flex items-center">
                      <a href="#" className="text-[#adb5db]"></a>
                      <a href="#" className="text-center my-0 mx-4">
                        What is the fastest and best way to learn JavaScript?
                      </a>
                    </div>
                  </div>
                  <div className="col-12 2xl:w-2/4">
                    <div className="relative flex items-center">
                      <a href="#" className="text-[#adb5db]"></a>
                      <a href="#" className="text-center my-0 mx-8">
                        What is the Best Language of Programming?
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <CommentsTextArea />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
