"use client";

import React from "react";
import { motion } from "framer-motion";
import Typed from "react-typed";
import Button from "./Button";

const Banner = () => {
  return (
    <section
      id="home"
      className="w-full mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8"
    >
      <motion.h3
        initial={{ x: -10, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-lg font-titleFont tracking-wide text-primary dark:text-textGreen"
      >
        Hi, my name is
      </motion.h3>

      <motion.h1
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-4xl lg:text-6xl font-titleFont font-semibold flex flex-col"
      >
        Wisdom Ossai{" "}
        <span className="text-textDark mt-2 lgl:mt-4">
          I am{" "}
          <Typed
            strings={[
              "a Software",
              "a React",
              "an Angular",
              "a Typescript",
              "a Node",
              "a Python",
            ]}
            typeSpeed={150}
            backSpeed={100}
            loop
          />{" "}
          developer
        </span>
      </motion.h1>

      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-base md:max-w-[650px] text-textDark font-medium"
      >
        I am a result-oriented software developer who has acquired significant
        knowledge and expertise in the last 4+ years of building highly scalable
        and adaptive enterprise solutions. I am passionate about building highly
        interactive, user-friendly and responsive applications{" "}
        <a href="">
          <span className="text-primary font-semibold dark:text-textGreen inline-flex relative cursor-pointer h-7 overflow-x-hidden group">
            {" "}
            Learn More...{" "}
            <span className="absolute w-full h-[1px] bg-primary dark:bg-textGreen left-0 bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
          </span>
        </a>
      </motion.p>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        <Button className="w-52 h-14" variant="bordered">
          See my Projects!
        </Button>
      </motion.div>
    </section>
  );
};

export default Banner;
