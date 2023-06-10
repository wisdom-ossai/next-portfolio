"use client";
import { motion } from "framer-motion";
import React, { FC } from "react";
import Icons from "../Icons";

interface IWorkHistory {
  jobTitle: string;
  organization: string;
  from: string;
  to: string;
  responsibilities: { id: number; description: string }[];
}

const WorkHistory: FC<IWorkHistory> = ({
  jobTitle,
  organization,
  from,
  to,
  responsibilities,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
    >
      <h3 className="flex items-center gap-1 font-medium text-xl font-titleFont">
        {jobTitle}{" "}
        <span className="text-primary dark:text-textGreen tracking-wide">
          @{organization}
        </span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        {from} - {to}
      </p>

      <ul className="flex flex-col gap-3 mt-3">
        {responsibilities.map((v) => (
          <li key={v.id} className="flex gap-2">
            <span className="pt-1">
              <Icons.ThumbsUp size={14} className="text-textGreen" />
            </span>
            <span className="text-sm text-textDark">{v.description}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default WorkHistory;
