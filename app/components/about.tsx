"use client";
import Image from "next/image";
import React from "react";
import Icons from "./Icons";
import SectionTitle from "./SectionTitle";
import profileImg from "public/photo_wisdom_ossai.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="w-full py-10 mdl:py-24 lgl:py-32 flex flex-col gap-8 "
    >
      <SectionTitle name="About" num="01." />

      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p>
            I am a highly motivated software engineer with keen interest in
            changing the world through tech, I think… 🤷‍♂️
          </p>
          <p>
            My field of Interests are{" "}
            <span>building new Web Technologies and Enterprise solutions</span>
          </p>
          <p>
            A passionate Full Stack Software Developer 🚀 I have an experience
            of building Web and Mobile applications with JavaScript, Reactjs,
            Nodejs, React Native and some other cool libraries
          </p>
          <p>
            Here are a few of the technologies I have been working on recently:
          </p>

          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
            <li className="flex items-center gap-3">
              <span className="text-primary dark:text-textGreen">
                <Icons.CheckCircle size={14} />
              </span>{" "}
              JavaScript (ES6+)
            </li>
            <li className="flex items-center gap-3">
              <span className="text-primary dark:text-textGreen">
                <Icons.CheckCircle size={14} />
              </span>{" "}
              Typescript
            </li>
            <li className="flex items-center gap-3">
              <span className="text-primary dark:text-textGreen">
                <Icons.CheckCircle size={14} />
              </span>{" "}
              React
            </li>
            <li className="flex items-center gap-3">
              <span className="text-primary dark:text-textGreen">
                <Icons.CheckCircle size={14} />
              </span>{" "}
              Angular
            </li>
            <li className="flex items-center gap-3">
              <span className="text-primary dark:text-textGreen">
                <Icons.CheckCircle size={14} />
              </span>{" "}
              Python
            </li>
            <li className="flex items-center gap-3">
              <span className="text-primary dark:text-textGreen">
                <Icons.CheckCircle size={14} />
              </span>{" "}
              Flask
            </li>
            <li className="flex items-center gap-3">
              <span className="text-primary dark:text-textGreen">
                <Icons.CheckCircle size={14} />
              </span>{" "}
              Django
            </li>
            <li className="flex items-center gap-3">
              <span className="text-primary dark:text-textGreen">
                <Icons.CheckCircle size={14} />
              </span>{" "}
              Postgres
            </li>
            <li className="flex items-center gap-3">
              <span className="text-primary dark:text-textGreen">
                <Icons.CheckCircle size={14} />
              </span>{" "}
              Node.js
            </li>
            <li className="flex items-center gap-3">
              <span className="text-primary dark:text-textGreen">
                <Icons.CheckCircle size={14} />
              </span>{" "}
              Express.js
            </li>
            <li className="flex items-center gap-3">
              <span className="text-primary dark:text-textGreen">
                <Icons.CheckCircle size={14} />
              </span>{" "}
              NextJs
            </li>
            <li className="flex items-center gap-3">
              <span className="text-primary dark:text-textGreen">
                <Icons.CheckCircle size={14} />
              </span>{" "}
              NestJs
            </li>
          </ul>
        </div>
        <div className="w-full lgl:w-1/3 h-80 lgl:h-96 relative group">
          <div className="absolute w-full h-80 lgl:h-96 -left-6 -top-6 rounded-lg">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
              <Image
                className="rounded-lg h-full object-cover"
                src={profileImg}
                alt="profileImg"
              />
              <div className="hidden lgl:inline-block absolute w-full h-80 lgl:h-96 bg-primary/20 dark:bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </div>
          <div className="hidden lgl:inline-flex w-full h-80 lgl:h-96 border-2 border-primary dark:border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
