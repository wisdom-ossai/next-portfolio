"use client";
import React, { useState } from "react";
import { Responsibilities } from "../constants";
import WorkHistory from "./companies/WorkHistory";
import SectionTitle from "./SectionTitle";

const Experience = () => {
  const [active, setActive] = useState("prunedge");
  return (
    <section
      id="experience"
      className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4"
    >
      <SectionTitle name="Where I've worked" num="02." />

      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          <li
            onClick={() => setActive("prunedge")}
            className={`border-l-2 border-l-${
              active === "prunedge" ? "primary" : "slate-200"
            } dark:border-l-${
              active === "prunedge" ? "textGreen" : "hoverColor"
            } text-textDark bg-transparent hover:bg-slate-300 dark:hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8`}
          >
            Prunedge
          </li>
          <li
            onClick={() => setActive("vgg")}
            className={`border-l-2 border-l-${
              active === "vgg" ? "primary" : "slate-200"
            } dark:border-l-${
              active === "vgg" ? "textGreen" : "hoverColor"
            } text-textDark bg-transparent hover:bg-slate-300 dark:hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8`}
          >
            VGG
          </li>
          <li
            onClick={() => setActive("xceed")}
            className={`border-l-2 border-l-${
              active === "xceed" ? "primary" : "slate-200"
            } dark:border-l-${
              active === "xceed" ? "textGreen" : "hoverColor"
            } text-textDark bg-transparent hover:bg-slate-300 dark:hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8`}
          >
            XCEED365
          </li>
        </ul>

        {active === "prunedge" && (
          <WorkHistory
            jobTitle="Software Engineer"
            organization="Prunedge"
            from="January 2022"
            to="Present"
            responsibilities={Responsibilities.prunedge}
          />
        )}
        {active === "vgg" && (
          <WorkHistory
            jobTitle="Software Engineer"
            organization="Venture Garden Group"
            from="October 2020"
            to="November 2021"
            responsibilities={Responsibilities.prunedge}
          />
        )}
        {active === "xceed" && (
          <WorkHistory
            jobTitle="Frontend Engineer"
            organization="XCEED365 Ltd"
            from="August 2018"
            to="September 2020"
            responsibilities={Responsibilities.prunedge}
          />
        )}
      </div>
    </section>
  );
};

export default Experience;
