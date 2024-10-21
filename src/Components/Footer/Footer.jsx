import React from "react";
import FooterItem from "../FooterItem/FooterItem";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="mt-8">
      <div className="container">
        <div className="footer-widgets shadow-xl bg-white rounded-2xl py-16 px-14 relative mb-20">
          <div className="row">
            <FooterItem title="About Us">
              <p className="text-[#7d7e7f]">
                When I first started learning programming. One of the problems
                that In the learning process, I had a lack of good training with
                support It was accepted that it made me decide at that time if
                one day the financial ability and I had an acceptable technique
                to start a website to solve this problem! And today Sabzlern
                Programming Training Academy as an academy It operates privately
                and this means that every school is allowed to teach It doesn't
                have it and it has to pass through the special filters of
                Sabzleran Academy! This means that we know how to express and
                interact with the instructor The student is very important! We
                at Sabzleren Academy guarantee good support and with We give you
                quality. Because the teachers of the website are green even for
                The support of their free courses is also charged and committed
                are to have the air of dear users!
              </p>
            </FooterItem>

            <FooterItem title="latest content">
              <div className="flex flex-col">
                <a
                  href="#"
                  className="block mb-4 text-[#7d7e7f] hover:text-accent"
                >
                  How to install the library in Python Python library
                  installation tutorial
                </a>
                <a
                  href="#"
                  className="block mb-4 text-[#7d7e7f] hover:text-accent"
                >
                  How to update Python? | Training from zero to one hundred
                  updates Python
                </a>
                <a
                  href="#"
                  className="block mb-4 text-[#7d7e7f] hover:text-accent"
                >
                  How to install Python on Mac, Windows and Linux step to Step
                  and image
                </a>
                <a
                  href="#"
                  className="block mb-4 text-[#7d7e7f] hover:text-accent"
                >
                  The best front-end frameworks 16 Front end framework review
                  advantages and disadvantages
                </a>
                <a
                  href="#"
                  className="block mb-4 text-[#7d7e7f] hover:text-accent"
                >
                  Introducing the best JavaScript training site [experience
                  oriented] + training Free
                </a>
              </div>
            </FooterItem>

            <FooterItem title="quick access">
              <div className="row">
                <div className="col-6 ">
                  <a
                    href="#"
                    className="block mb-4 text-[#7d7e7f] hover:text-accent"
                  >
                    HTML tutorial
                  </a>
                </div>

                <div className="col-6">
                  <a
                    href="#"
                    className="block mb-4 text-[#7d7e7f] hover:text-accent"
                  >
                    CSS tutorial
                  </a>
                </div>

                <div className="col-6">
                  <a
                    href="#"
                    className="block mb-4 text-[#7d7e7f] hover:text-accent"
                  >
                    JavaScript training
                  </a>
                </div>
                <div className="col-6">
                  <a
                    href="#"
                    className="block mb-4 text-[#7d7e7f] hover:text-accent"
                  >
                    Bootstrap tutorial
                  </a>
                </div>
                <div className="col-6">
                  <a
                    href="#"
                    className="block mb-4 text-[#7d7e7f] hover:text-accent"
                  >
                    React training
                  </a>
                </div>

                <div className="col-6">
                  <a
                    href="#"
                    className="block mb-4 text-[#7d7e7f] hover:text-accent"
                  >
                    Python training
                  </a>
                </div>
              </div>
            </FooterItem>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center !bg-accent py-12 px-0">
        <span className="text-text font-bold">Developer: Mohammad Arab</span>
      </div>
    </footer>
  );
}
