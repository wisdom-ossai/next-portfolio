"use client";
import { motion } from "framer-motion";
const AsideWrapper = ({ children, className, x, delay }: any) => {
  return (
    <motion.div
      initial={{ x: x || -10, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: delay || 1.5 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AsideWrapper;
