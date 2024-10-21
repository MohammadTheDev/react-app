import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import AboutUsBox from "../AboutUsBox/AboutUsBox";

export default function AboutUs() {
  return (
    <div className="my-24 mx-40">
      <div className="container">
        <SectionHeader
          title="How can we help you?"
          desc="Since the Sabzleran educational academy is a private academy."
        />

        <div className="container">
          <div className="row">
            <AboutUsBox
              title="Dedicated courses"
              desc="Provides support and high quality!"
              icon=" fa-copyright"
            />
            <AboutUsBox
              title="permission to teach"
              desc="It does not apply to any school. Because quality is important to him!"
              icon=" fa-leaf"
            />
            <AboutUsBox
              title="Paid and free course"
              desc="It doesn't matter to him. He pays his teachers to provide the highest quality in support and updating the course."
              icon=" fa-gem"
            />
            <AboutUsBox
              title="Teaching permission"
              desc="He doesn't go to every school and only cooperates with senior and mid-level schools because quality is important to him."
              icon=" fa-crown"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
