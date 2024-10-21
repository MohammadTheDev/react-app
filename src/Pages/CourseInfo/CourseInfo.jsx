import React from "react";
import TopBar from "../../Components/TopBar/TopBar";
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import CourseDetailBox from "../../Components/CourseDetailBox/CourseDetailBox";
import CommentsTextArea from "../../Components/CommentsTextArea/CommentsTextArea";
import Accordion from "react-bootstrap/Accordion";

export default function CourseInfo() {
  return (
    <div className="bg-background">
      <TopBar />
      <NavBar />

      <BreadCrumb
        links={[
          { id: 1, title: "Home", to: "" },
          {
            id: 2,
            title: "Front-end programming training",
            to: "category/frontend",
          },
          {
            id: 3,
            title: "JavaScript expert course",
            to: "course-info/js-expert",
          },
        ]}
      />

      <section className="rounded-lg mt-4 p-8 shadow-2xl shadow-[#46484d14] border-solid border border-[#f2f2f2]">
        <div className="container">
          <div className="row">
            <div className="col-12 2xl:w-2/4">
              <video
                src=""
                poster="/images/courses/js_project.png"
                className="w-full rounded-2xl mb-4"
                controls
              ></video>
            </div>
            <div className="col-12 2xl:w-2/4 ">
              <a
                href="#"
                className="text-xl bg-[#2bce5633] !text-text rounded-md mt-4 py-1.5 px-4"
              >
                Front-End programming training
              </a>
              <h1 className="my-4 mx-0 font-bold text-[#464749]">
                Project-oriented comprehensive JavaScript training
              </h1>
              <p className="mb-8 text-3xl text-[#7b868a]">
                JavaScript training is suitable for all people who intend to
                enter the programming language. Especially for those interested
                in the front field, as you know, JavaScript is one of the most
                popular programming languages...
              </p>
              <div className="course-info__social-media mb-4">
                <a
                  href="#"
                  className="text-[#b1bbbf] ml-7 transition-all duration-300 ease-in"
                >
                  <i className="fab fa-telegram-plane course-info__icon"></i>
                </a>
                <a
                  href="#"
                  className="text-[#b1bbbf] ml-7 transition-all duration-300 ease-in"
                >
                  <i className="fab fa-twitter course-info__icon"></i>
                </a>
                <a
                  href="#"
                  className="text-[#b1bbbf] ml-7 transition-all duration-300 ease-in"
                >
                  <i className="fab fa-facebook-f text-4xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="mt-8">
        <div className="container">
          <div className="row">
            <div className="col-12 2xl:w-[66%]">
              <div className="course">
                <div className="course-boxes">
                  <div className="row">
                    <CourseDetailBox
                      icon={`graduation-cap`}
                      title=" Course status: "
                      desc=" finished"
                    />
                    <CourseDetailBox
                      icon={`clock`}
                      title="Course duration:"
                      desc="19 hours"
                    />
                    <CourseDetailBox
                      icon={`calendar-alt`}
                      title="last update:"
                      desc="1401/03/02"
                    />
                    <CourseDetailBox
                      icon={`user-alt`}
                      title="support method"
                      desc="Online"
                    />
                    <CourseDetailBox
                      icon={`info-circle`}
                      title="Prerequisite:"
                      desc="HTML CSS"
                    />
                    <CourseDetailBox
                      icon={`play`}
                      title="View type:"
                      desc="Recorded / Online"
                    />
                  </div>
                </div>

                <div className="rounded-2xl my-12 mx-0 pt-8 pb-5 px-8 bg-[#f0f2f7]">
                  <div className="flex items-center mb-6">
                    <i className="fas fa-chart-line text text-4xl text-[#7b868a]"></i>
                    <span className="mr-6 text-[#7b868a] text-2xl ml-4">
                      Course progress percentage: 100%
                    </span>
                  </div>
                  <div className="progress h-4 rounded-full">
                    <div
                      className="bg-accent progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      aria-label="Animated striped example"
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </div>

                <div className="p-12 rounded-lg shadow-lg shadow-[#46484d14]">
                  <div className="introduction__item">
                    <span className="introduction__title title">
                      Project-oriented comprehensive JavaScript training
                    </span>
                    <img
                      src="/images/info/1.gif"
                      alt="course info image"
                      className="mt-12 block rounded-2xl img-fluid"
                    />
                    <p className="mt-8 text-text text-3xl">
                      There are many libraries for the JavaScript language And
                      several new libraries are added to this list every year
                      which are heavily used in the labor market and if not
                      Entering the job market knowing these libraries is very
                      annoying You will and may even be disappointed!
                    </p>
                    <p className="mt-8 text-text text-3xl">
                      This language was used in the beginning with the aim of
                      making changes in the appearance of web pages and
                      increasing their interaction with the user. But with the
                      passage of time, it was developed so much that it can be
                      said that it has become the French key of the programming
                      world and is used in all fields from web design to
                      reservation systems and Internet of Things.
                    </p>
                  </div>
                  <div>
                    <span className="introduction__title title t-8">
                      Who is the JavaScript course suitable for?
                    </span>
                    <img
                      src="/images/info/2.jpg"
                      alt="course info image"
                      className="mt-12 block rounded-2xl img-fluid"
                    />
                    <p className="mt-8 text-text text-3xl">
                      When I first entered a programming company, Libraries
                      called Lodash and were used While I was hearing the name
                      for the first time and that's it I had not used these
                      libraries at the time.
                    </p>
                    <p className="mt-8 text-text text-3xl">
                      It was here that I realized that JavaScript libraries are
                      one of the They are the most important topics that every
                      web developer has to enter The job market and earning
                      better, comfortable and more should work with them has
                      done
                    </p>
                    <p className="mt-8 text-text text-3xl">
                      As it is clear from the name of this course, the purpose
                      of this course Teaching 20 items from the most practical
                      and widely used library JavaScript is so that you can use
                      it after this course More strength and readiness to
                      continue the path of web programming Give, learn React or
                      Node or... more easily and finally Enter the job market
                      and earn money.
                    </p>
                    <p className="mt-8 text-text text-3xl">
                      Shaw as a web developer, at least if with a specific
                      library If you have not worked, you must know how to use a
                      library learn new Suppose a new library is created. Do you
                      have to wait for the training course?! Definitely not.
                    </p>
                    <p className="mt-8 text-text text-3xl">
                      In this course, in addition to the direct training of each
                      library, we tried How to learn a new library also teach
                      you dear ones After completing the course, we will no
                      longer be affiliated with any course or person Don't be
                      special and if a new library is introduced to the world of
                      JavaScript and Web added, easy to learn.
                    </p>
                  </div>
                  <div className="mt-16">
                    <a
                      href="#"
                      className="text-text border-solid border-2 !border-[#979393] rounded-lg py-3.5 px-6 font-bold text-2xl m-2 hover:text-white hover:!bg-primary"
                    >
                      Download all videos
                    </a>
                    <a
                      href="#"
                      className="text-text border-solid border-2 !border-[#979393] rounded-lg py-3.5 px-6 font-bold text-2xl m-2 hover:text-white hover:!bg-primary"
                    >
                      Download all attachments
                    </a>
                  </div>

                  <div className="mt-16">
                    <Accordion defaultActiveKey="0">
                      <Accordion.Item eventKey="0" className="mb-8">
                        <Accordion.Header className="!text-4xl !font-extrabold">
                          Course introduction
                        </Accordion.Header>
                        <Accordion.Body className="flex justify-between items-center py-6 px-5">
                          <div className="flex items-center">
                            <span className="w-14 h-14 border-solid border-2 border-[#bfbfbf] !bg-accent text-text rounded-full flex items-center justify-center">
                              1
                            </span>
                            <i className="fab fa-youtube my-0 mx-6 text-[#939aa3] text-3xl"></i>
                            <a href="#" className="text-text">
                              Introducing the course + Why is it necessary to
                              learn libraries?
                            </a>
                          </div>
                          <div className="introduction__accordion-left">
                            <span className="text-[#7a7a7a]">18:34</span>
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1" className="mb-8">
                        <Accordion.Header className="!text-4xl !font-extrabold">
                          Introductory terms related to backend
                        </Accordion.Header>
                        <Accordion.Body className="flex justify-between items-center py-6 px-5">
                          <div className="flex items-center">
                            <span className="w-14 h-14 border-solid border-2 border-[#bfbfbf] !bg-accent text-text rounded-full flex items-center justify-center">
                              2
                            </span>
                            <i className="fab fa-youtube my-0 mx-6 text-[#939aa3] text-3xl"></i>
                            <a
                              href="#"
                              introduction__accordion-link
                              className="text-text"
                            >
                              Introducing the course + Why is it necessary to
                              learn libraries?
                            </a>
                          </div>
                          <div className="introduction__accordion-left">
                            <span className="text-[#7a7a7a]">10</span>
                          </div>
                        </Accordion.Body>
                        <Accordion.Body className="flex justify-between items-center py-6 px-5">
                          <div className="flex items-center">
                            <span className="w-14 h-14 border-solid border-2 border-[#bfbfbf] !bg-accent text-text rounded-full flex items-center justify-center">
                              3
                            </span>
                            <i className="fab fa-youtube my-0 mx-6 text-[#939aa3] text-3xl"></i>
                            <a href="#" className="text-text">
                              The second session of this season
                            </a>
                          </div>
                          <div className="introduction__accordion-left">
                            <span className="text-[#7a7a7a]">13:45</span>
                          </div>
                        </Accordion.Body>
                        <Accordion.Body className="flex justify-between items-center py-6 px-5">
                          <div className="flex items-center">
                            <span className="w-14 h-14 border-solid border-2 border-[#bfbfbf] !bg-accent text-text rounded-full flex items-center justify-center">
                              4
                            </span>
                            <i className="fab fa-youtube my-0 mx-6 text-[#939aa3] text-3xl"></i>
                            <a href="#" className="text-text">
                              The third session of this season
                            </a>
                          </div>
                          <div className="introduction__accordion-left">
                            <span className="text-[#7a7a7a]">7:22</span>
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </div>
                </div>

                <div className="rounded-lg p-8 mt-14 mb-8 shadow-xl shadow-[#46484d14]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img
                        src="/images/info/teacher.jfif"
                        alt="Teacher Profile"
                        className="w-16 h-auto rounded-full shadow-xl shadow-[#00000021]"
                      />
                      <div className="flex flex-col ml-8">
                        <a href="#" className="no-underline text-text">
                          Mohammad Arab
                        </a>
                        <span className="text-[#7b868a] text-lg ">
                          Front End & Back End Developer
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center text-text !bg-primary py-2 px-4">
                      <i className="fas fa-chalkboard-teacher text-3xl"></i>
                      <span className="text-2xl font-bold mr-1.5">Teacher</span>
                    </div>
                  </div>
                  <p className="mt-4 text-text text-3.5">
                    First of all, I started Android programming and nearly 2 I
                    was working with Android Java language for years. Then I
                    decided to I have a web activity. And..
                  </p>
                </div>

                <CommentsTextArea />
              </div>
            </div>
            <div className="col-12 2xl:w-2/6">
              <div className="sticky top-8">
                <div className="rounded-lg mt-4 p-9 shadow-2xl shadow-[#46484d14] border-solid border border-[#f2f2f2]">
                  <div className="text-center !bg-primary py-6 px-4 rounded-lg shadow-xl shadow-[#1fbd505c]">
                    <span className="block text-text text-3xl">
                      <i className="fas fa-graduation-cap text-8"></i>
                      You are a course student
                    </span>
                  </div>
                </div>
                <div className="rounded-lg mt-4 p-9 shadow-2xl shadow-[#46484d14] border-solid border border-[#f2f2f2]">
                  <div className="course-info__total">
                    <div className="flex items-center justify-center p-6 rounded-2xl border-2 border-solid border-[#f0f2f7]">
                      <div className="course-info__total-sale">
                        <i className="fas fa-user-graduate text-[#555555] text-4xl"></i>
                        <span className="text-[#7f8187]">
                          Number of students:
                        </span>
                        <span className="text-text bg-background rounded-lg py-1.5 px-5">
                          178
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-evenly pt-8text-[#7b868a]">
                      <div className="course-info__total-comment">
                        <i className="far fa-comments text-4xl"></i>
                        <span className="text-2xl ml-4">67 point of view</span>
                      </div>
                      <div className="course-info__total-view">
                        <i className="far fa-eye text-4xl"></i>
                        <span className="text-2xl ml-4">14,234 Visit</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg mt-4 p-9 shadow-2xl shadow-[#46484d14] border-solid border border-[#f2f2f2]">
                  <div className="flex items-center text-text">
                    <i className="fas fa-link text-4xl"></i>
                    <span className="text-3xl ml-2">short link</span>
                  </div>
                  <span className="block my-4 mx-0 border border-solid border-[#dcdcdc] text-text roundeed-lg py-2 px-4 text-2xl">
                    https://sabzlearn.ir/?p=117472
                  </span>
                </div>
                <div className="rounded-lg mt-4 p-9 shadow-2xl shadow-[#46484d14] border-solid border border-[#f2f2f2]">
                  <span className="text-3xl block text-text mb-6">
                    Course headings:
                  </span>
                  <span className="text-2xl text-text">
                    To view or download the course on the word
                    <a href="#" className="!text-primary font-bold mx-2">
                      Link
                    </a>
                    click
                  </span>
                </div>
                <div className="rounded-lg mt-4 p-9 shadow-2xl shadow-[#46484d14] border-solid border border-[#f2f2f2]">
                  <span className="font-black">Related courses</span>
                  <ul className="course-info__courses-list">
                    <li className="mb-8">
                      <a href="#" className="flex rounded-lg">
                        <img
                          src="/images/courses/js_project.png"
                          alt="Course Cover"
                          className="w-2/6 2xl:w-[70px] rounded-lg "
                        />
                        <span className="text-3xl 2xl:text-xl ml-4 text-text font-bold">
                          Specialized projects with JavaScript
                        </span>
                      </a>
                    </li>
                    <li className="mb-8">
                      <a href="#" className="flex rounded-lg">
                        <img
                          src="/images/courses/fareelancer.png"
                          alt="Course Cover"
                          className="w-2/6 2xl:w-[70px] rounded-lg"
                        />
                        <span className="text-3xl 2xl:text-xl ml-4 text-text font-bold">
                          Determining the price of freelance projects
                        </span>
                      </a>
                    </li>
                    <li className="mb-8">
                      <a href="#" className="flex rounded-lg">
                        <img
                          src="/images/courses/nodejs.png"
                          alt="Course Cover"
                          className="w-2/6 2xl:w-[70px] rounded-lg"
                        />
                        <span className="text-3xl 2xl:text-xl ml-4 text-text font-bold">
                          Api writing course
                        </span>
                      </a>
                    </li>
                    <li className="mb-8">
                      <a href="#" className="flex rounded-lg">
                        <img
                          src="/images/courses/jango.png"
                          alt="Course Cover"
                          className="w-2/6 2xl:w-[70px] rounded-lg"
                        />
                        <span className="text-3xl 2xl:text-xl ml-4 text-text font-bold">
                          Django expert
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
